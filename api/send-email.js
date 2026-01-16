const brevo = require('@getbrevo/brevo');
const { google } = require('googleapis');

module.exports = async function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🔍 Iniciando handler de send-email');
    console.log('📦 Body recibido:', JSON.stringify(req.body));
    
    const { 
      nombre, 
      telefono, 
      correo
    } = req.body;

    // Validar datos requeridos
    if (!nombre || !telefono) {
      console.log('❌ Validación fallida: faltan datos');
      return res.status(400).json({ error: 'Faltan datos requeridos: nombre y teléfono son obligatorios' });
    }

    console.log('✅ Datos validados correctamente');
    console.log('🔑 Verificando variables de entorno...');
    console.log('BREVO_API_KEY:', process.env.BREVO_API_KEY ? '✓ Configurada' : '✗ NO configurada');
    console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? '✓ Configurada' : '✗ NO configurada');
    console.log('GOOGLE_CREDENTIALS:', process.env.GOOGLE_CREDENTIALS ? '✓ Configurada' : '✗ NO configurada');

    // Configurar Brevo
    console.log('🔧 Configurando Brevo...');
    let apiInstance = new brevo.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    // Configurar Google Sheets
    console.log('🔧 Configurando Google Sheets...');
    const auth = new google.auth.GoogleAuth({
      credentials: process.env.GOOGLE_CREDENTIALS ? JSON.parse(process.env.GOOGLE_CREDENTIALS) : null,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

    // 1. GUARDAR EN GOOGLE SHEETS
    if (SPREADSHEET_ID) {
      console.log('📊 Guardando en Google Sheets...');
      const timestamp = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
      
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: 'Respuestas!A:D',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              timestamp,
              nombre,
              telefono,
              correo || 'No proporcionado'
            ]],
          },
        });
        console.log('✅ Guardado en Google Sheets exitosamente');
      } catch (sheetError) {
        console.error('❌ ERROR de Google Sheets:', sheetError.message);
      }
    }

    // Preparar el HTML del email
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="border-bottom: 3px solid #bd2121; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #bd2121;">SEEMANN GROUP</h2>
          <p style="margin: 5px 0 0 0; color: #666;">Confirmación de Contacto</p>
        </div>
        
        <p>Estimado/a <strong>${nombre}</strong>,</p>
        
        <p>Gracias por contactarnos. Hemos recibido su información:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Nombre:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${nombre}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Teléfono:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${telefono}</td></tr>
          ${correo ? `<tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${correo}</td></tr>` : ''}
        </table>
        
        <p>Nuestro equipo se pondrá en contacto con usted a la brevedad.</p>
        
        <p>Saludos cordiales,<br><strong>Equipo Seemann Group</strong></p>
        
        <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>Seemann Group - Soluciones logísticas internacionales<br>
          Email: <a href="mailto:contacto@seemanngroup.com">contacto@seemanngroup.com</a> | Tel: +56 2 2604 8386</p>
        </div>
      </div>
    `;

    // 2. ENVIAR EMAIL DE CONFIRMACIÓN AL CLIENTE (solo si proporcionó email)
    if (correo) {
      let sendSmtpEmail = new brevo.SendSmtpEmail();
      
      sendSmtpEmail.sender = { name: 'Seemann Group', email: 'pablotrax03@gmail.com' };
      sendSmtpEmail.to = [{ email: correo, name: nombre }];
      sendSmtpEmail.replyTo = { email: 'pablotrax03@gmail.com', name: 'Seemann Group' };
      sendSmtpEmail.subject = 'Confirmación de Contacto - Seemann Group';
      sendSmtpEmail.htmlContent = emailHTML;
      sendSmtpEmail.headers = {
        'X-Priority': '1',
        'X-Category': 'transactional'
      };

      try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('✅ Email de confirmación enviado al cliente');
      } catch (error) {
        console.error('❌ Error al enviar email al cliente:', error);
      }
    }

    // 3. ENVIAR NOTIFICACIÓN AL EQUIPO
    const teamEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #bd2121; color: white; padding: 20px; margin-bottom: 20px;">
          <h2 style="margin: 0;">🔔 NUEVO CONTACTO</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Formulario Web - Seemann Group</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Nombre</td><td style="padding: 12px; border: 1px solid #ddd;">${nombre}</td></tr>
          <tr><td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Teléfono</td><td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${telefono}">${telefono}</a></td></tr>
          <tr><td style="padding: 12px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Email</td><td style="padding: 12px; border: 1px solid #ddd;">${correo || 'No proporcionado'}</td></tr>
        </table>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            Fecha: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}<br>
            Este es un mensaje automático del formulario de contacto web.
          </p>
        </div>
      </div>
    `;

    let teamEmail = new brevo.SendSmtpEmail();
    teamEmail.sender = { name: 'Seemann Group Web', email: 'pablotrax03@gmail.com' };
    teamEmail.to = [{ email: 'pablotrax03@gmail.com', name: 'Pablo Piñeiro' }];
    teamEmail.subject = `🔔 Nuevo contacto: ${nombre}`;
    teamEmail.htmlContent = teamEmailHTML;

    try {
      await apiInstance.sendTransacEmail(teamEmail);
      console.log('✅ Notificación enviada al equipo');
    } catch (error) {
      console.error('⚠️ Error al enviar notificación al equipo:', error);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Registro completado exitosamente'
    });

  } catch (error) {
    console.error('❌ Error general:', error);
    console.error('Stack trace:', error.stack);
    return res.status(500).json({ 
      success: false,
      error: 'Error interno del servidor',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
