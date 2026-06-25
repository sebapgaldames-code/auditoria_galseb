# Descripción Técnica

Durante la auditoría se identificó una vulnerabilidad de **XSS Reflected** en un campo de entrada del portal de autogestión. La aplicación procesa y muestra el contenido proporcionado por el usuario sin aplicar mecanismos adecuados de validación o codificación de salida, permitiendo la ejecución de código JavaScript arbitrario en el navegador de la víctima. La prueba se realizó mediante la inyección del payload `<script>alert('XSS')</script>`, confirmando que el script es interpretado y ejecutado por el navegador.

# Impacto en ConectaTel (ISP)

La presencia de esta vulnerabilidad expone a los usuarios del portal de ConectaTel a ataques dirigidos que pueden comprometer la confidencialidad de sus sesiones y datos personales. Un atacante podría distribuir enlaces especialmente diseñados para ejecutar código malicioso en el navegador de los clientes autenticados, facilitando el robo de cookies de sesión, credenciales de acceso, información personal o la realización de acciones no autorizadas en nombre del usuario.

Además, la explotación de esta vulnerabilidad afecta la confianza de los clientes en la plataforma de autogestión y representa un riesgo para la imagen institucional de ConectaTel. Si el ataque se dirige a usuarios con privilegios administrativos, el impacto podría extenderse a la gestión de servicios, la modificación de configuraciones críticas y el acceso a información sensible de la organización.