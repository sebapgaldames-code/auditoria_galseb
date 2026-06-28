# Plan de Recuperación
Plan de Recuperacion ante desastres adaptado para el escenario del robo de datos a Conectatel

## Escenario 1: Borrado/Robo de BD de Clientes
Impacto: exposición, pérdida de integridad y disponibilidad.
Acciones: asignar ID, aislar BD, preservar evidencia.
Contención: bloquear accesos, detener exfiltración, activar WAF.
Recuperación: restaurar backup verificado en entorno aislado; aplicar binlogs.
Validación: pruebas de integridad, comparar conteos; retorno gradual.
Post: rotar credenciales e informe de causa raíz.

## Escenario 2: Compromiso de Routers Core (vía RCE)
Impacto: interrupción de rutas, manipulación de enrutamiento, posible interceptación.
Acciones: asignar ID, activar equipo de redes, aplicar ACLs temporales.
Contención: desviar tráfico a rutas alternativas; aislar router comprometido.
Recuperación: reinstalar firmware/imagen segura; restaurar configuración desde backup.
Validación: pruebas end-to-end, revisar NetFlow y logs; monitorizar.
Post: hardening, restringir gestión (MFA, IPs), auditar control plane.
