# Descripción Técnica

Durante la evaluación se identificó una vulnerabilidad de SQL Injection en el campo User ID del portal de autogestión. La aplicación no valida ni sanitiza adecuadamente los datos ingresados por el usuario, permitiendo que una entrada maliciosa como ' OR '1'='1 modifique la lógica de la consulta SQL ejecutada por el servidor. Como resultado, el sistema devuelve múltiples registros de la base de datos sin requerir una autenticación válida, evidenciando una validación insuficiente de las entradas y una construcción insegura de las consultas.

# Impacto en ConectaTel (ISP)

La vulnerabilidad identificada compromete directamente la confidencialidad de la información administrada por ConectaTel, permitiendo el acceso no autorizado a datos de los suscriptores, como información personal, registros de facturación y detalles de los servicios contratados. La exposición de estos datos representa un riesgo significativo para la privacidad de los clientes y para el cumplimiento de las políticas de seguridad de la organización.

Asimismo, el acceso indebido a la base de datos incrementa el riesgo de alteración o eliminación de información crítica, afectando la integridad de los registros y la correcta operación del portal de autogestión. La explotación de esta vulnerabilidad podría generar interrupciones en la prestación de los servicios, pérdidas económicas, sanciones regulatorias y un impacto negativo en la reputación y confianza de ConectaTel frente a sus clientes.