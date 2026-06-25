# Inspeccion e Identificacion de activos de Conectatel afectados por los ataques realizados, evaluacion en base a la triada CIA (Confidencialidad, Integridad, Disponibilidad).

Como parte de la auditoría de seguridad se realizó un análisis de los activos tecnológicos involucrados en las vulnerabilidades identificadas. Se determinó que los ataques de **SQL Injection**, **Reflected Cross-Site Scripting (XSS)** y **Command Injection** afectan componentes críticos de la infraestructura de ConectaTel, comprometiendo tanto la información de los clientes como los servicios que soportan la operación del portal de autogestión.

Los principales activos identificados como afectados son:

| Activo | Descripción | Vulnerabilidad Asociada |
|--------|-------------|-------------------------|
| Portal Web de Autogestión | Plataforma utilizada por los clientes para consultar y administrar sus servicios. | SQL Injection, Reflected XSS |
| Base de Datos de Clientes | Almacena información personal, credenciales, planes contratados y registros de facturación. | SQL Injection |
| Servidor de Aplicaciones | Ejecuta la lógica del portal y procesa las solicitudes de los usuarios. | Command Injection, Reflected XSS |
| Sistema Operativo del Servidor | Infraestructura que soporta el portal y sus servicios internos. | Command Injection |
| Información de Suscriptores | Datos personales, contratos, historial de servicios y facturación. | SQL Injection, Reflected XSS |
| Sesiones de Usuarios | Cookies y tokens utilizados para mantener la autenticación de los clientes. | Reflected XSS |

# Evaluación de Impacto según la Tríada CIA

| Vulnerabilidad | Confidencialidad | Integridad | Disponibilidad |
|---------------|------------------|------------|-----------------|
| **SQL Injection** | **Alta.** Permite acceder a información confidencial de clientes, credenciales, registros de facturación y datos de servicios. | **Alta.** Posibilita modificar, insertar o eliminar registros almacenados en la base de datos. | **Media.** Consultas maliciosas o eliminación de información pueden afectar el funcionamiento normal del portal. |
| **Reflected XSS** | **Alta.** Facilita el robo de cookies de sesión, credenciales e información mostrada al usuario. | **Media.** Permite ejecutar acciones en nombre del usuario autenticado y manipular información visualizada en el navegador. | **Baja.** Generalmente no afecta directamente la disponibilidad del sistema, aunque puede utilizarse para distribuir ataques a múltiples usuarios. |
| **Command Injection** | **Alta.** Permite acceder a archivos sensibles del servidor y obtener información interna del sistema operativo. | **Alta.** Hace posible modificar configuraciones, archivos críticos y ejecutar comandos arbitrarios con los privilegios del servidor. | **Alta.** Puede provocar interrupciones de servicios, eliminación de archivos, ejecución de software malicioso o comprometer completamente el servidor. |
