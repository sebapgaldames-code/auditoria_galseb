# Políticas de Prevención y Controles de Mitigación

El presente apartado define las políticas de seguridad y controles técnicos recomendados para la prevención y mitigación de las vulnerabilidades identificadas en la infraestructura de ConectaTel, con el objetivo de reducir la superficie de ataque y fortalecer la postura de seguridad de los sistemas críticos.

---

# 1. SQL Injection

## Políticas de Prevención

- Se establece como obligatorio el uso de **consultas parametrizadas (Prepared Statements)** en todas las interacciones con bases de datos.
- Se prohíbe la concatenación directa de entradas de usuario en consultas SQL.
- Todo dato ingresado por el usuario debe pasar por un proceso de **validación estricta de tipo, formato y longitud**.
- Se debe aplicar el principio de **mínimo privilegio** en las cuentas de base de datos utilizadas por las aplicaciones.

## Controles de Mitigación

- Implementación de **ORMs seguros** (ej. Hibernate, Sequelize, Entity Framework) para abstracción de consultas.
- Uso de **Web Application Firewall (WAF)** con reglas específicas contra patrones de SQL Injection.
- Monitoreo de consultas anómalas mediante sistemas de logging y detección de intrusiones (IDS).
- Segmentación de bases de datos para limitar el impacto en caso de compromiso.
- Auditorías periódicas de código y pruebas de penetración.

---

# 2. Cross-Site Scripting (XSS)

## Políticas de Prevención

- Toda entrada de usuario debe ser **sanitizada y escapada antes de ser mostrada en el navegador**.
- Se debe aplicar **codificación de salida contextual (HTML, JavaScript, URL)** según el uso de los datos.
- Está prohibido el uso de entradas sin validación en contenido dinámico del frontend.
- Se debe implementar una política estricta de **Content Security Policy (CSP)**.

## Controles de Mitigación

- Activación de cabeceras de seguridad como:
  - `Content-Security-Policy`
  - `X-XSS-Protection`
  - `X-Content-Type-Options`
- Uso de frameworks modernos que realicen escape automático de contenido (React, Angular, Vue).
- Validación y sanitización centralizada en backend.
- Monitoreo de tráfico HTTP para detectar payloads maliciosos.
- Capacitación a desarrolladores en desarrollo seguro.

---

# 3. Command Injection

## Políticas de Prevención

- Se prohíbe el uso directo de comandos del sistema operativo con entrada proporcionada por usuarios.
- Las funciones que ejecuten comandos del sistema deben estar **estrictamente restringidas o eliminadas**.
- Toda entrada debe ser validada bajo listas blancas (whitelisting) cuando sea estrictamente necesaria.
- Los procesos del sistema deben ejecutarse con **privilegios mínimos necesarios**.

## Controles de Mitigación

- Reemplazo de llamadas a shell por **APIs seguras del lenguaje de programación**.
- Uso de contenedores (Docker) para aislar procesos críticos.
- Implementación de **AppArmor / SELinux** para restricción de ejecución de comandos.
- Monitoreo del sistema mediante EDR (Endpoint Detection and Response).
- Registro y alerta de comandos ejecutados en el servidor.
- Segmentación de red para limitar movimiento lateral en caso de compromiso.
