import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

// Configuración de Google Sheets
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

// Configuración de Email
const EMAIL_USER = process.env.EMAIL_USER || 'pablotrax03@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('es-CL', { 
      timeZone: 'America/Santiago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    // 1. Guardar en Google Sheets
    if (SHEET_ID && SERVICE_ACCOUNT_EMAIL && PRIVATE_KEY) {
      try {
        const serviceAccountAuth = new JWT({
          email: SERVICE_ACCOUNT_EMAIL,
          key: PRIVATE_KEY,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        
        const sheet = doc.sheetsByIndex[0];
        
        await sheet.addRow({
          Fecha: formattedDate,
          Nombre: name,
          Email: email,
          Teléfono: phone || 'N/A',
          Empresa: company || 'N/A',
          Mensaje: message,
          Timestamp: timestamp
        });

        console.log('✅ Datos guardados en Google Sheets');
      } catch (sheetError) {
        console.error('❌ Error en Google Sheets:', sheetError);
      }
    }

    // 2. Enviar correo SIMPLE (sin HTML excesivo para evitar Promociones)
    if (EMAIL_USER && EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
          }
        });

        // Correo al ejecutivo - TEXTO PLANO SIMPLE
        await transporter.sendMail({
          from: `"Formulario Seemann" <${EMAIL_USER}>`,
          to: EMAIL_USER,
          subject: `Nuevo contacto: ${name}`,
          text: `
NUEVA SOLICITUD DE CONTACTO

Fecha: ${formattedDate}
Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Empresa: ${company || 'No proporcionada'}

Mensaje:
${message}

---
Este correo fue enviado desde el formulario de contacto de seemanngroup.com
          `.trim(),
          // HTML minimalista sin imágenes ni links
          html: `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
  <h2 style="color: #bd2121; border-bottom: 2px solid #bd2121; padding-bottom: 10px;">Nueva Solicitud de Contacto</h2>
  
  <p><strong>Fecha:</strong> ${formattedDate}</p>
  <p><strong>Nombre:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
  <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
  
  <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #bd2121; margin-top: 20px;">
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  </div>
  
  <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
  <p style="font-size: 12px; color: #666;">Este correo fue enviado desde el formulario de contacto de seemanngroup.com</p>
</div>
          `.trim(),
          headers: {
            'X-Priority': '1',
            'Importance': 'high',
            'X-Auto-Response-Suppress': 'All'
          }
        });

        // Correo de confirmación al cliente - TEXTO SIMPLE
        await transporter.sendMail({
          from: `"Seemann Group" <${EMAIL_USER}>`,
          to: email,
          subject: 'Hemos recibido tu solicitud - Seemann Group',
          text: `
Hola ${name},

Gracias por contactarnos. Hemos recibido tu solicitud y un ejecutivo comercial te responderá dentro de las próximas 24 horas hábiles.

Tu mensaje:
${message}

Saludos,
Equipo Seemann Group
contacto@seemanngroup.com
          `.trim(),
          html: `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
  <h2 style="color: #bd2121;">Hola ${name},</h2>
  
  <p>Gracias por contactarnos. Hemos recibido tu solicitud y un ejecutivo comercial te responderá dentro de las próximas <strong>24 horas hábiles</strong>.</p>
  
  <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #bd2121; margin-top: 20px;">
    <p><strong>Tu mensaje:</strong></p>
    <p>${message}</p>
  </div>
  
  <p style="margin-top: 30px;">Saludos,<br><strong>Equipo Seemann Group</strong></p>
  <p style="color: #666;">contacto@seemanngroup.com</p>
</div>
          `.trim()
        });

        console.log('✅ Correos enviados');
      } catch (emailError) {
        console.error('❌ Error enviando emails:', emailError);
      }
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Formulario procesado correctamente' 
    });

  } catch (error) {
    console.error('❌ Error general:', error);
    return res.status(500).json({ 
      error: 'Error al procesar el formulario',
      details: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
}
