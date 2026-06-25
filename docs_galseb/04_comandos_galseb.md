# Descripción Técnica

Durante la auditoría se identificó una vulnerabilidad de **Command Injection** en la funcionalidad de diagnóstico de red utilizada para realizar pruebas de conectividad mediante el comando **ping**. La aplicación no valida ni filtra correctamente la entrada proporcionada por el usuario, permitiendo la inyección y ejecución de comandos adicionales del sistema operativo. La prueba se realizó introduciendo el payload `127.0.0.1; cat /etc/passwd`, obteniendo como respuesta el contenido del archivo `/etc/passwd`, lo que confirma la ejecución de comandos arbitrarios en el servidor.

La vulnerabilidad evidencia una validación insuficiente de los parámetros de entrada y el uso inseguro de funciones que invocan comandos del sistema operativo. La ausencia de controles adecuados permite que un atacante ejecute instrucciones con los privilegios del proceso de la aplicación, ampliando considerablemente la superficie de ataque del servidor.

# Impacto en ConectaTel (ISP)

La explotación de esta vulnerabilidad compromete directamente la infraestructura de ConectaTel, ya que permite la ejecución de comandos arbitrarios sobre el servidor que aloja el portal de autogestión. Un atacante podría acceder a archivos sensibles del sistema, obtener información sobre la configuración del servidor, extraer credenciales almacenadas, modificar archivos críticos o utilizar el servidor como punto de acceso para comprometer otros sistemas internos de la organización.

Adicionalmente, esta vulnerabilidad representa un riesgo elevado para la disponibilidad y continuidad de los servicios, al posibilitar la alteración de configuraciones, la interrupción de procesos esenciales, el despliegue de software malicioso o la afectación de componentes relacionados con la administración de clientes y la infraestructura de red. Su explotación podría derivar en una brecha de seguridad con consecuencias operativas, económicas y reputacionales para ConectaTel.
