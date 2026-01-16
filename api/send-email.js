import { GoogleAuth } from 'google-auth-library';

export default async function handler(req, res) {
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
    const { nombre, telefono, correo } = req.body;

    if (!nombre || !telefono) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // 1. GUARDAR EN GOOGLE SHEETS
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_CREDENTIALS) {
      try {
        const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
        
        const auth = new GoogleAuth({
          credentials: credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();
        const timestamp = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
        
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/Respuestas!A:D:append?valueInputOption=USER_ENTERED`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken.token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: [[timestamp, nombre, telefono, correo || 'No proporcionado']],
            }),
          }
        );

        if (!response.ok) {
          console.error('Error Google Sheets:', await response.text());
        }
      } catch (sheetError) {
        console.error('Error Google Sheets:', sheetError.message);
      }
    }

    // 2. ENVIAR EMAILS CON BREVO
    if (process.env.BREVO_API_KEY) {
      const emailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
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
        </div>
      `;

      // Email al cliente
      if (correo) {
        try {
          await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
              'api-key': process.env.BREVO_API_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sender: { name: 'Seemann Group', email: 'pablotrax03@gmail.com' },
              to: [{ email: correo, name: nombre }],
              subject: 'Confirmación de Contacto - Seemann Group',
              htmlContent: emailHTML,
            }),
          });
        } catch (err) {
          console.error('Error email cliente:', err.message);
        }
      }

      // Email al equipo
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': process.env.BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { name: 'Seemann Group Web', email: 'pablotrax03@gmail.com' },
            to: [{ email: 'pablotrax03@gmail.com', name: 'Pablo Piñeiro' }],
            subject: `🔔 Nuevo contacto: ${nombre}`,
            htmlContent: `
              <div style="font-family: Arial, sans-serif;">
                <h2>🔔 Nuevo Contacto</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></p>
                <p><strong>Email:</strong> ${correo || 'No proporcionado'}</p>
                <p><small>Fecha: ${new Date().toLocaleString('es-CL')}</small></p>
              </div>
            `,
          }),
        });
      } catch (err) {
        console.error('Error email equipo:', err.message);
      }
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Registro completado exitosamente'
    });

  } catch (error) {
    console.error('Error general:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
};
