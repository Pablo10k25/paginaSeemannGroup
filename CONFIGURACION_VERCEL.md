# Configuración de Variables de Entorno en Vercel

## Variables Requeridas para el Formulario de Contacto

Para que el formulario de contacto funcione correctamente y guarde los datos en Google Sheets y envíe correos, necesitas configurar las siguientes variables de entorno en Vercel:

### 1. Google Sheets

Ve a la configuración del servicio de cuentas en Google Cloud Console y obtén:

- **GOOGLE_SHEET_ID**: `106k5fzZiyuT3ODN6xfIAqDe-Ca2HzLGOp3c_4Hycr44` (ya configurado)
- **GOOGLE_SERVICE_ACCOUNT_EMAIL**: `formulario-seemann@formulario-seemann.iam.gserviceaccount.com`
- **GOOGLE_PRIVATE_KEY**: La clave privada completa del archivo JSON de la cuenta de servicio. 
  - **IMPORTANTE**: Copia TODO el contenido, incluyendo `-----BEGIN PRIVATE KEY-----` y `-----END PRIVATE KEY-----`
  - Los saltos de línea `\n` deben mantenerse tal cual

### 2. Email (Gmail)

- **EMAIL_USER**: `pablotrax03@gmail.com` (email que recibirá las notificaciones)
- **EMAIL_PASS**: Contraseña de aplicación de Gmail
  - **NO uses tu contraseña normal de Gmail**
  - Genera una "Contraseña de aplicación" desde tu cuenta de Google:
    1. Ve a https://myaccount.google.com/security
    2. Activa la verificación en dos pasos si no la tienes
    3. Busca "Contraseñas de aplicaciones"
    4. Genera una nueva contraseña para "Correo"
    5. Copia la contraseña de 16 caracteres generada

## Cómo Configurar en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Entra en **Settings** → **Environment Variables**
3. Agrega cada variable con su valor correspondiente
4. Asegúrate de seleccionar los entornos: **Production**, **Preview**, y **Development**
5. Guarda los cambios
6. Haz un nuevo deploy para que las variables tomen efecto

## Verificación de Google Sheets

Asegúrate de que:
- ✅ La cuenta de servicio `formulario-seemann@formulario-seemann.iam.gserviceaccount.com` tiene acceso de **Editor** a la hoja de cálculo
- ✅ La hoja de cálculo tiene las siguientes columnas en la primera fila:
  - Fecha
  - Nombre
  - Email
  - Teléfono
  - Empresa
  - Mensaje
  - Timestamp

## Solución de Problemas

### Los emails llegan a Promociones

El código ya está optimizado para evitar esto con:
- Texto plano + HTML mínimo
- Headers especiales (X-Priority: 1, Importance: high)
- Sin imágenes ni links promocionales
- Asunto simple y transaccional

Si aún así llegan a Promociones, puedes:
1. Marcar manualmente algunos emails como "No es promoción" en Gmail
2. Mover manualmente varios emails a la bandeja principal - Gmail aprenderá el patrón
3. Considerar usar un dominio personalizado con SPF/DKIM configurado

### Los datos no se guardan en Sheets

Verifica:
1. Que todas las variables de entorno estén correctamente configuradas en Vercel
2. Que la cuenta de servicio tenga permisos de Editor en la hoja
3. Revisa los logs de Vercel en el Dashboard → **Functions** → Ver logs de `/api/contact`
4. Que el formato de GOOGLE_PRIVATE_KEY sea correcto (con `\n` para saltos de línea)

### El formulario muestra error

Abre la consola del navegador (F12) y revisa:
- Errores de red en la pestaña Network
- Mensajes de error en la pestaña Console
- Verifica que el endpoint `/api/contact` esté respondiendo

## Testing Local

Para probar localmente:
1. Copia `.env.example` a `.env`
2. Llena las variables con los valores reales
3. Ejecuta `npm run dev`
4. Prueba el formulario en http://localhost:5173

**NOTA**: Las Vercel Serverless Functions solo funcionan en Vercel. Para testing local completo, necesitarías configurar un servidor de desarrollo que emule las funciones serverless.
