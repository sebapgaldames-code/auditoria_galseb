import { useState } from 'react'
import './App.css'

const navItems = [
  { id: 'home', label: 'Inicio', dot: 'dot-blue' },
  { id: 'resumen', label: 'Resumen Ejecutivo', dot: 'dot-blue' },
  { id: 'sql', label: 'SQL Injection', dot: 'dot-red' },
  { id: 'xss', label: 'Reflected XSS', dot: 'dot-red' },
  { id: 'cmd', label: 'Command Injection', dot: 'dot-red' },
  { id: 'activos', label: 'Activos Afectados', dot: 'dot-orange' },
  { id: 'matriz', label: 'Matriz de Riesgo', dot: 'dot-orange' },
  { id: 'controles', label: 'Controles', dot: 'dot-green' },
  { id: 'recuperacion', label: 'Plan de Recuperación', dot: 'dot-yellow' },
]

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'resumen':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 01 · resumen ejecutivo · 01_resumen_galseb.md</div>
            <h2>Resumen Ejecutivo</h2>
            <p>El presente documento presenta los resultados de la auditoría de seguridad técnica realizada al portal de autogestión y sistemas asociados de <strong>ConectaTel Telecomunicaciones</strong>, un proveedor ficticio de servicios de Internet (ISP).</p>
            <p>La evaluación tuvo como objetivo identificar vulnerabilidades que pudieran comprometer la confidencialidad, integridad y disponibilidad de la información, con especial énfasis en la protección de datos de clientes, la gestión de planes de servicio y la seguridad de los sistemas críticos de la organización.</p>
            <p>Las pruebas, ejecutadas en un entorno de laboratorio que simula un ambiente de producción, identificaron vulnerabilidades críticas relacionadas con inyección de código, manipulación de scripts y controles de acceso insuficientes. En un escenario real, estas debilidades podrían permitir el acceso no autorizado a información sensible, la modificación de datos de clientes y la afectación de servicios esenciales, evidenciando la necesidad de fortalecer los controles de seguridad antes de un despliegue en producción.</p>
            <hr />
            <h3>Contexto del Negocio Auditado</h3>
            <p><strong>ConectaTel Telecomunicaciones</strong> es un proveedor ficticio de servicios de Internet que administra información sensible de sus clientes, incluyendo datos personales, registros de facturación y configuraciones relacionadas con la provisión de servicios de conectividad.</p>
            <p>Durante la auditoría se identificaron vulnerabilidades críticas que, de existir en un entorno operativo, podrían ser explotadas para acceder a información confidencial, modificar configuraciones o interrumpir servicios.</p>
          </div>
        )
      case 'sql':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 02 · vulnerabilidad · 02_sql_galseb.md</div>
            <h2>SQL Injection</h2>
            <div className="vuln-card">
              <div className="vuln-header">
                <span className="badge badge-critical">Crítico</span>
                <span className="vuln-name">Inyección SQL en campo User ID — Portal de Autogestión</span>
                <span className="cvss">CVSS <strong>9.8</strong></span>
              </div>
              <div className="vuln-body">
                <p>La aplicación no valida ni sanitiza adecuadamente los datos ingresados por el usuario, permitiendo que una entrada maliciosa modifique la lógica de la consulta SQL ejecutada por el servidor. Como resultado, el sistema devuelve múltiples registros sin requerir una autenticación válida.</p>
                <div className="payload-label">// payload utilizado</div>
                <div className="payload-block">' OR '1'='1</div>
                <h3>Impacto en ConectaTel</h3>
                <p>La vulnerabilidad compromete directamente la confidencialidad de la información administrada por ConectaTel, permitiendo el acceso no autorizado a datos de suscriptores.</p>
              </div>
            </div>
          </div>
        )
      case 'xss':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 03 · vulnerabilidad · 03_xss_galseb.md</div>
            <h2>Reflected XSS</h2>
            <div className="vuln-card">
              <div className="vuln-header">
                <span className="badge badge-high">Alto</span>
                <span className="vuln-name">Cross-Site Scripting Reflejado — Portal de Autogestión</span>
                <span className="cvss">CVSS <strong>8.7</strong></span>
              </div>
              <div className="vuln-body">
                <p>La aplicación procesa y muestra el contenido proporcionado por el usuario sin aplicar mecanismos adecuados de validación o codificación de salida, permitiendo la ejecución de código JavaScript arbitrario en el navegador de la víctima.</p>
                <div className="payload-label">// payload utilizado</div>
                <div className="payload-block">&lt;script&gt;alert('XSS')&lt;/script&gt;</div>
                <h3>Impacto en ConectaTel</h3>
                <p>Expone a los usuarios del portal a ataques dirigidos que pueden comprometer la confidencialidad de sus sesiones y datos personales.</p>
              </div>
            </div>
          </div>
        )
      case 'cmd':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 04 · vulnerabilidad · 04_comandos_galseb.md</div>
            <h2>Command Injection</h2>
            <div className="vuln-card">
              <div className="vuln-header">
                <span className="badge badge-critical">Crítico</span>
                <span className="vuln-name">Inyección de Comandos — Funcionalidad de Diagnóstico de Red</span>
                <span className="cvss">CVSS <strong>9.8</strong></span>
              </div>
              <div className="vuln-body">
                <p>La aplicación no valida ni filtra correctamente la entrada proporcionada por el usuario en la funcionalidad de diagnóstico de red (ping), permitiendo la inyección y ejecución de comandos adicionales del sistema operativo.</p>
                <div className="payload-label">// payload utilizado — reveló contenido de /etc/passwd</div>
                <div className="payload-block">127.0.0.1; cat /etc/passwd</div>
                <h3>Impacto en ConectaTel</h3>
                <p>Permite la ejecución de comandos arbitrarios sobre el servidor con los privilegios del proceso de la aplicación. Representa el riesgo más elevado para la disponibilidad y continuidad de los servicios.</p>
              </div>
            </div>
          </div>
        )
      case 'activos':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 05 · análisis de activos · 05_activos_galseb.md</div>
            <h2>Activos Afectados</h2>
            <p>Como parte de la auditoría se realizó un análisis de los activos tecnológicos involucrados. Los ataques identificados afectan componentes críticos de la infraestructura de ConectaTel.</p>
            <div className="vuln-card">
              <table className="assets-table">
                <thead>
                  <tr>
                    <th>Activo</th>
                    <th>Descripción</th>
                    <th>Vulnerabilidades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Portal Web de Autogestión</td>
                    <td>Plataforma utilizada por clientes para consultar y administrar sus servicios.</td>
                    <td><span className="vuln-tag">SQL Injection</span><span className="vuln-tag">XSS</span></td>
                  </tr>
                  <tr>
                    <td>Base de Datos de Clientes</td>
                    <td>Almacena información personal, credenciales, planes y facturación.</td>
                    <td><span className="vuln-tag">SQL Injection</span></td>
                  </tr>
                  <tr>
                    <td>Servidor de Aplicaciones</td>
                    <td>Ejecuta la lógica del portal y procesa solicitudes de usuarios.</td>
                    <td><span className="vuln-tag">Command Injection</span><span className="vuln-tag">XSS</span></td>
                  </tr>
                  <tr>
                    <td>Sistema Operativo del Servidor</td>
                    <td>Infraestructura que soporta el portal y sus servicios internos.</td>
                    <td><span className="vuln-tag">Command Injection</span></td>
                  </tr>
                  <tr>
                    <td>Información de Suscriptores</td>
                    <td>Datos personales, contratos, historial y facturación.</td>
                    <td><span className="vuln-tag">SQL Injection</span><span className="vuln-tag">XSS</span></td>
                  </tr>
                  <tr>
                    <td>Sesiones de Usuarios</td>
                    <td>Cookies y tokens utilizados para mantener la autenticación de los clientes.</td>
                    <td><span className="vuln-tag">XSS</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'matriz':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 06 · evaluación de riesgo · 06_matriz_galseb.md</div>
            <h2>Matriz de Riesgo</h2>
            <p>Relación entre la probabilidad de explotación de las vulnerabilidades identificadas y su impacto en el negocio para priorizar las acciones de mitigación.</p>
            <div className="risk-items">
              <div className="risk-item"><span className="badge badge-critical">Crítico</span><span className="risk-name">SQL Injection</span><span className="risk-meta">Probabilidad: Muy Alta · Impacto: Muy Alto</span></div>
              <div className="risk-item"><span className="badge badge-critical">Crítico</span><span className="risk-name">Command Injection</span><span className="risk-meta">Probabilidad: Alta · Impacto: Muy Alto</span></div>
              <div className="risk-item"><span className="badge badge-high">Alto</span><span className="risk-name">Reflected XSS</span><span className="risk-meta">Probabilidad: Alta · Impacto: Alto</span></div>
            </div>
          </div>
        )
      case 'controles':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 07 · remediación · 07_controles_galseb.md</div>
            <h2>Controles de Mitigación</h2>
            <p>Políticas de seguridad y controles técnicos recomendados para la prevención y mitigación de las vulnerabilidades identificadas en la infraestructura de ConectaTel.</p>
            <div className="control-group">
              <div className="control-group-header"><span className="badge badge-critical">SQL Injection</span><span className="control-title">Políticas y Controles</span></div>
              <div className="control-col">
                <div>
                  <h3>Prevención</h3>
                  <ul className="control-list">
                    <li>Uso obligatorio de Prepared Statements en toda interacción con BD</li>
                    <li>Prohibición de concatenación directa de entradas en consultas SQL</li>
                    <li>Validación estricta de tipo, formato y longitud de entradas</li>
                  </ul>
                </div>
                <div>
                  <h3>Mitigación</h3>
                  <ul className="control-list">
                    <li>Implementación de ORMs seguros</li>
                    <li>Web Application Firewall (WAF) con reglas contra SQL Injection</li>
                    <li>Monitoreo de consultas anómalas con IDS/logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      case 'recuperacion':
        return (
          <div className="page active">
            <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
            <div className="section-eyebrow">// 08 · plan de recuperación · 08_recuperacion_galseb.md</div>
            <h2>Plan de Recuperación ante Desastres</h2>
            <p>Plan de respuesta a incidentes adaptado para los escenarios de compromiso identificados durante la auditoría de ConectaTel.</p>
            <div className="scenario-card">
              <div className="scenario-header"><span className="scenario-num">ESC-01</span><span className="scenario-title">Borrado / Robo de Base de Datos de Clientes</span><span className="badge badge-critical">Crítico</span></div>
              <div className="steps-list">
                <div className="step-item"><div className="step-num">01</div><div><div className="step-label">Detección e Identificación</div><div className="step-desc">Asignar ID de incidente. Aislar la base de datos comprometida. Preservar evidencia forense sin alterarla.</div></div></div>
                <div className="step-item"><div className="step-num">02</div><div><div className="step-label">Contención</div><div className="step-desc">Bloquear accesos no autorizados. Detener posible exfiltración en curso. Activar WAF con reglas de emergencia.</div></div></div>
                <div className="step-item"><div className="step-num">03</div><div><div className="step-label">Recuperación</div><div className="step-desc">Restaurar backup verificado en entorno aislado. Aplicar binary logs para recuperar transacciones recientes.</div></div></div>
              </div>
            </div>
            <div className="scenario-card">
              <div className="scenario-header"><span className="scenario-num">ESC-02</span><span className="scenario-title">Compromiso de Routers Core vía RCE</span><span className="badge badge-critical">Crítico</span></div>
              <div className="steps-list">
                <div className="step-item"><div className="step-num">01</div><div><div className="step-label">Detección e Identificación</div><div className="step-desc">Asignar ID de incidente. Activar equipo de redes. Aplicar ACLs temporales de emergencia para limitar el daño.</div></div></div>
                <div className="step-item"><div className="step-num">02</div><div><div className="step-label">Contención</div><div className="step-desc">Desviar tráfico hacia rutas alternativas. Aislar el router comprometido de la infraestructura de producción.</div></div></div>
                <div className="step-item"><div className="step-num">03</div><div><div className="step-label">Recuperación</div><div className="step-desc">Reinstalar firmware/imagen segura desde fuente verificada. Restaurar configuración desde backup íntegro.</div></div></div>
              </div>
            </div>
          </div>
        )
      case 'home':
      default:
        return (
          <div className="page active">
            <div className="home-hero">
              <div className="section-eyebrow">// auditoría de seguridad técnica · E09</div>
              <h1>ConectaTel<br />Telecomunicaciones</h1>
              <p className="home-subtitle">Resultados de la evaluación de seguridad sobre el portal de autogestión y sistemas asociados del ISP ficticio ConectaTel.</p>
            </div>
            <div className="risk-banner">
              <div className="icon">⚠</div>
              <div>
                <div className="label">Estado General del Sistema</div>
                <div className="title">3 vulnerabilidades críticas identificadas — requieren remediación inmediata</div>
              </div>
            </div>
            <div className="stat-grid">
              <div className="stat-card"><div className="number num-red">3</div><div className="desc">Vulnerabilidades críticas</div></div>
              <div className="stat-card"><div className="number num-orange">6</div><div className="desc">Activos comprometidos</div></div>
              <div className="stat-card"><div className="number num-blue">2</div><div className="desc">Escenarios de recuperación</div></div>
            </div>
            <div className="cards-section-label">// Informe</div>
            <div className="nav-cards" style={{ gridTemplateColumns: '1fr' }}>
              <button className="nav-card accent-blue" onClick={() => setPage('resumen')}>
                <div className="card-tag tag-blue">01 · resumen ejecutivo</div>
                <div className="card-title">Resumen Ejecutivo</div>
                <p className="card-desc">Contexto del negocio auditado, alcance de la evaluación y síntesis de los hallazgos identificados en el entorno de laboratorio de ConectaTel.</p>
              </button>
            </div>
            <div className="cards-section-label">// Vulnerabilidades Identificadas</div>
            <div className="nav-cards">
              <button className="nav-card accent-red" onClick={() => setPage('sql')}>
                <div className="card-tag tag-red">02 · vulnerabilidad</div>
                <div className="card-title">SQL Injection</div>
                <p className="card-desc">Inyección en el campo User ID del portal. Permite acceso no autorizado a la base de datos de clientes sin autenticación válida.</p>
              </button>
              <button className="nav-card accent-red" onClick={() => setPage('xss')}>
                <div className="card-tag tag-red">03 · vulnerabilidad</div>
                <div className="card-title">Reflected XSS</div>
                <p className="card-desc">Ejecución de JavaScript arbitrario en el navegador de la víctima. Facilita robo de sesiones y credenciales.</p>
              </button>
              <button className="nav-card accent-red" onClick={() => setPage('cmd')}>
                <div className="card-tag tag-red">04 · vulnerabilidad</div>
                <div className="card-title">Command Injection</div>
                <p className="card-desc">Ejecución de comandos arbitrarios del SO en la funcionalidad de diagnóstico de red. Compromiso total del servidor.</p>
              </button>
            </div>
            <div className="cards-section-label">// Análisis de Impacto</div>
            <div className="nav-cards">
              <button className="nav-card accent-orange" onClick={() => setPage('activos')}>
                <div className="card-tag tag-orange">05 · activos afectados</div>
                <div className="card-title">Inspección de Activos</div>
                <p className="card-desc">Identificación de activos tecnológicos comprometidos y evaluación de impacto según la tríada CIA.</p>
              </button>
              <button className="nav-card accent-orange" onClick={() => setPage('matriz')}>
                <div className="card-tag tag-orange">06 · evaluación de riesgo</div>
                <div className="card-title">Matriz de Riesgo</div>
                <p className="card-desc">Mapa de calor con relación probabilidad/impacto de cada vulnerabilidad y nivel de riesgo resultante.</p>
              </button>
            </div>
            <div className="cards-section-label">// Remediación</div>
            <div className="nav-cards">
              <button className="nav-card accent-green" onClick={() => setPage('controles')}>
                <div className="card-tag tag-green">07 · controles</div>
                <div className="card-title">Políticas y Controles de Mitigación</div>
                <p className="card-desc">Controles técnicos y políticas de seguridad recomendados para prevenir y mitigar las vulnerabilidades.</p>
              </button>
              <button className="nav-card accent-yellow" onClick={() => setPage('recuperacion')}>
                <div className="card-tag tag-yellow">08 · recuperación</div>
                <div className="card-title">Plan de Recuperación ante Desastres</div>
                <p className="card-desc">Procedimientos de respuesta a incidentes para escenarios de robo de base de datos y compromiso de routers core vía RCE.</p>
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="app-shell">
      <nav className="sidebar">
        <div className="nav-brand">
          <div className="logo-tag">// informe de auditoría</div>
          <h2>ConectaTel<br />Telecomunicaciones</h2>
          <div className="org">E09 · Seguridad Técnica</div>
        </div>
        <div className="nav-links">
          <div className="nav-section-label">Informe</div>
          {navItems.map((item) => (
            <button key={item.id} className={`nav-link ${page === item.id ? 'active' : ''}`} onClick={() => setPage(item.id)}>
              <span className={`dot ${item.dot}`}></span>
              {item.label}
            </button>
          ))}
        </div>
        <div className="nav-footer">Entorno de laboratorio<br />Simulación de producción</div>
      </nav>

      <main className="main-content">{renderPage()}</main>
    </div>
  )
}

export default App
