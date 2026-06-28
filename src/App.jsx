import { useState } from 'react'
import './App.css'

const navSections = [
  {
    label: 'Informe',
    items: [
      { id: 'home',    label: 'Inicio',            dot: 'dot-blue' },
      { id: 'resumen', label: 'Resumen Ejecutivo',  dot: 'dot-blue' },
    ],
  },
  {
    label: 'Vulnerabilidades',
    items: [
      { id: 'sql', label: 'SQL Injection',    dot: 'dot-red' },
      { id: 'xss', label: 'Reflected XSS',   dot: 'dot-red' },
      { id: 'cmd', label: 'Command Injection', dot: 'dot-red' },
    ],
  },
  {
    label: 'Análisis',
    items: [
      { id: 'activos', label: 'Activos Afectados', dot: 'dot-orange' },
      { id: 'matriz',  label: 'Matriz de Riesgo',  dot: 'dot-orange' },
    ],
  },
  {
    label: 'Remediación',
    items: [
      { id: 'controles',    label: 'Controles',              dot: 'dot-green' },
      { id: 'recuperacion', label: 'Plan de Recuperación',   dot: 'dot-yellow' },
    ],
  },
]

// ─────────────────────────── PAGE COMPONENTS ────────────────────────────────

function PageHome({ setPage }) {
  return (
    <div className="page active">
      <div className="home-hero">
        <div className="section-eyebrow">// auditoría de seguridad técnica · E09</div>
        <h1>ConectaTel<br />Telecomunicaciones</h1>
        <p className="home-subtitle">
          Resultados de la evaluación de seguridad sobre el portal de autogestión y sistemas
          asociados del ISP ficticio ConectaTel.
        </p>
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

      {/* Informe */}
      <div className="cards-section-label">// Informe</div>
      <div className="nav-cards" style={{ gridTemplateColumns: '1fr' }}>
        <button className="nav-card accent-blue" onClick={() => setPage('resumen')}>
          <div className="card-tag tag-blue">01 · resumen ejecutivo</div>
          <div className="card-title">Resumen Ejecutivo</div>
          <p className="card-desc">Contexto del negocio auditado, alcance de la evaluación y síntesis de los hallazgos identificados en el entorno de laboratorio de ConectaTel.</p>
          <span className="card-badge badge badge-file">01_resumen_galseb.md</span>
        </button>
      </div>

      {/* Vulnerabilidades */}
      <div className="cards-section-label">// Vulnerabilidades Identificadas</div>
      <div className="nav-cards">
        <button className="nav-card accent-red" onClick={() => setPage('sql')}>
          <div className="card-tag tag-red">02 · vulnerabilidad</div>
          <div className="card-title">SQL Injection</div>
          <p className="card-desc">Inyección en el campo User ID del portal. Permite acceso no autorizado a la base de datos de clientes sin autenticación válida.</p>
          <div className="card-footer-meta">
            <span className="badge badge-critical">Crítico</span>
            <span className="cvss-inline">CVSS <strong className="cvss-red">9.8</strong></span>
          </div>
        </button>
        <button className="nav-card accent-red" onClick={() => setPage('xss')}>
          <div className="card-tag tag-red">03 · vulnerabilidad</div>
          <div className="card-title">Reflected XSS</div>
          <p className="card-desc">Ejecución de JavaScript arbitrario en el navegador de la víctima. Facilita robo de sesiones y credenciales de usuarios autenticados.</p>
          <div className="card-footer-meta">
            <span className="badge badge-high">Alto</span>
            <span className="cvss-inline">CVSS <strong className="cvss-orange">8.7</strong></span>
          </div>
        </button>
        <button className="nav-card accent-red" onClick={() => setPage('cmd')}>
          <div className="card-tag tag-red">04 · vulnerabilidad</div>
          <div className="card-title">Command Injection</div>
          <p className="card-desc">Ejecución de comandos arbitrarios del SO en la funcionalidad de diagnóstico de red. Compromiso total del servidor.</p>
          <div className="card-footer-meta">
            <span className="badge badge-critical">Crítico</span>
            <span className="cvss-inline">CVSS <strong className="cvss-red">9.8</strong></span>
          </div>
        </button>
      </div>

      {/* Análisis */}
      <div className="cards-section-label">// Análisis de Impacto</div>
      <div className="nav-cards">
        <button className="nav-card accent-orange" onClick={() => setPage('activos')}>
          <div className="card-tag tag-orange">05 · activos afectados</div>
          <div className="card-title">Inspección de Activos</div>
          <p className="card-desc">Identificación de activos tecnológicos comprometidos y evaluación de impacto según la tríada CIA (Confidencialidad, Integridad, Disponibilidad).</p>
          <span className="card-badge badge badge-file-orange">6 activos afectados</span>
        </button>
        <button className="nav-card accent-orange" onClick={() => setPage('matriz')}>
          <div className="card-tag tag-orange">06 · evaluación de riesgo</div>
          <div className="card-title">Matriz de Riesgo</div>
          <p className="card-desc">Mapa de calor con relación probabilidad/impacto de cada vulnerabilidad y nivel de riesgo resultante para priorizar la remediación.</p>
          <span className="card-badge badge badge-critical">3 riesgos críticos</span>
        </button>
      </div>

      {/* Remediación */}
      <div className="cards-section-label">// Remediación</div>
      <div className="nav-cards">
        <button className="nav-card accent-green" onClick={() => setPage('controles')}>
          <div className="card-tag tag-green">07 · controles</div>
          <div className="card-title">Políticas y Controles de Mitigación</div>
          <p className="card-desc">Controles técnicos y políticas de seguridad recomendados para prevenir y mitigar las tres vulnerabilidades identificadas.</p>
          <span className="card-badge badge badge-file-green">9 controles clave</span>
        </button>
        <button className="nav-card accent-yellow" onClick={() => setPage('recuperacion')}>
          <div className="card-tag tag-yellow">08 · recuperación</div>
          <div className="card-title">Plan de Recuperación ante Desastres</div>
          <p className="card-desc">Procedimientos de respuesta a incidentes para escenarios de robo de base de datos y compromiso de routers core vía RCE.</p>
          <span className="card-badge badge badge-file-yellow">2 escenarios cubiertos</span>
        </button>
      </div>
    </div>
  )
}

function PageResumen({ setPage }) {
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
      <p><strong>ConectaTel Telecomunicaciones</strong> es un proveedor ficticio de servicios de Internet que administra información sensible de sus clientes, incluyendo datos personales, registros de facturación y configuraciones relacionadas con la provisión de servicios de conectividad. Debido a la naturaleza de sus operaciones, la organización depende de la disponibilidad y seguridad de sus plataformas para garantizar la continuidad del servicio.</p>
      <p>Durante la auditoría se identificaron vulnerabilidades críticas que, de existir en un entorno operativo, podrían ser explotadas para acceder a información confidencial, modificar configuraciones o interrumpir servicios. Estos hallazgos ponen de manifiesto la importancia de implementar medidas de mitigación y reforzar las prácticas de desarrollo seguro y gestión de vulnerabilidades.</p>
    </div>
  )
}

function PageSQL({ setPage }) {
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
          <p>La vulnerabilidad compromete directamente la confidencialidad de la información administrada por ConectaTel, permitiendo el acceso no autorizado a datos de suscriptores: información personal, registros de facturación y detalles de servicios contratados.</p>
          <p>El acceso indebido a la base de datos incrementa el riesgo de alteración o eliminación de información crítica, pudiendo generar interrupciones en la prestación de servicios, pérdidas económicas, sanciones regulatorias e impacto reputacional.</p>
        </div>
      </div>
    </div>
  )
}

function PageXSS({ setPage }) {
  return (
    <div className="page active">
      <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
      <div className="section-eyebrow">// 03 · vulnerabilidad · 03_xss_galseb.md</div>
      <h2>Reflected XSS</h2>
      <div className="vuln-card">
        <div className="vuln-header">
          <span className="badge badge-high">Alto</span>
          <span className="vuln-name">Cross-Site Scripting Reflejado — Portal de Autogestión</span>
          <span className="cvss cvss-orange-val">CVSS <strong>8.7</strong></span>
        </div>
        <div className="vuln-body">
          <p>La aplicación procesa y muestra el contenido proporcionado por el usuario sin aplicar mecanismos adecuados de validación o codificación de salida, permitiendo la ejecución de código JavaScript arbitrario en el navegador de la víctima.</p>
          <div className="payload-label">// payload utilizado</div>
          <div className="payload-block">{'<script>alert(\'XSS\')</script>'}</div>
          <h3>Impacto en ConectaTel</h3>
          <p>Expone a los usuarios del portal a ataques dirigidos que pueden comprometer la confidencialidad de sus sesiones y datos personales. Un atacante podría distribuir enlaces especialmente diseñados para ejecutar código malicioso, facilitando el robo de cookies, credenciales e información personal.</p>
          <p>Si el ataque se dirige a usuarios con privilegios administrativos, el impacto podría extenderse a la gestión de servicios, la modificación de configuraciones críticas y el acceso a información sensible de la organización.</p>
        </div>
      </div>
    </div>
  )
}

function PageCMD({ setPage }) {
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
          <p>La aplicación no valida ni filtra correctamente la entrada proporcionada por el usuario en la funcionalidad de diagnóstico de red (<code className="inline-code">ping</code>), permitiendo la inyección y ejecución de comandos adicionales del sistema operativo.</p>
          <div className="payload-label">// payload utilizado — reveló contenido de /etc/passwd</div>
          <div className="payload-block">127.0.0.1; cat /etc/passwd</div>
          <h3>Impacto en ConectaTel</h3>
          <p>Permite la ejecución de comandos arbitrarios sobre el servidor con los privilegios del proceso de la aplicación. Un atacante podría acceder a archivos sensibles, extraer credenciales almacenadas, modificar archivos críticos o utilizar el servidor como punto de acceso para comprometer otros sistemas internos.</p>
          <p>Representa el riesgo más elevado para la disponibilidad y continuidad de los servicios, al posibilitar el despliegue de software malicioso, la interrupción de procesos esenciales y el movimiento lateral hacia la infraestructura interna.</p>
        </div>
      </div>
    </div>
  )
}

function PageActivos({ setPage }) {
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
              <td>Plataforma utilizada por clientes para administrar sus servicios.</td>
              <td><span className="vuln-tag">SQL Injection</span><span className="vuln-tag">XSS</span></td>
            </tr>
            <tr>
              <td>Base de Datos de Clientes</td>
              <td>Almacena datos personales, credenciales, planes y facturación.</td>
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
              <td>Cookies y tokens para autenticación de clientes.</td>
              <td><span className="vuln-tag">XSS</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: '28px', marginBottom: '12px' }}>Evaluación CIA por Vulnerabilidad</h3>
      <div className="vuln-card">
        <table className="cia-table">
          <thead>
            <tr>
              <th>Vulnerabilidad</th>
              <th>Confidencialidad</th>
              <th>Integridad</th>
              <th>Disponibilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SQL Injection</td>
              <td><span className="impact-pill pill-alta">Alta</span></td>
              <td><span className="impact-pill pill-alta">Alta</span></td>
              <td><span className="impact-pill pill-media">Media</span></td>
            </tr>
            <tr>
              <td>Reflected XSS</td>
              <td><span className="impact-pill pill-alta">Alta</span></td>
              <td><span className="impact-pill pill-media">Media</span></td>
              <td><span className="impact-pill pill-baja">Baja</span></td>
            </tr>
            <tr>
              <td>Command Injection</td>
              <td><span className="impact-pill pill-alta">Alta</span></td>
              <td><span className="impact-pill pill-alta">Alta</span></td>
              <td><span className="impact-pill pill-alta">Alta</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PageMatriz({ setPage }) {
  return (
    <div className="page active">
      <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
      <div className="section-eyebrow">// 06 · evaluación de riesgo · 06_matriz_galseb.md</div>
      <h2>Matriz de Riesgo</h2>
      <p>Relación entre la <strong>probabilidad de explotación</strong> de las vulnerabilidades identificadas y su <strong>impacto en el negocio</strong>, para priorizar las acciones de mitigación.</p>

      {/* Mapa de calor */}
      <div className="heat-grid">
        <div></div>
        <div className="heat-col-label">Muy Baja</div>
        <div className="heat-col-label">Baja</div>
        <div className="heat-col-label">Media</div>
        <div className="heat-col-label">Alta</div>
        <div className="heat-col-label">Muy Alta</div>

        <div className="heat-label">Muy Alto</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-alto">ALTO</div>
        <div className="heat-cell h-crit">CRIT</div>
        <div className="heat-cell h-crit">CRIT</div>
        <div className="heat-cell h-crit h-active">CRIT ★</div>

        <div className="heat-label">Alto</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-alto">ALTO</div>
        <div className="heat-cell h-crit h-active">CRIT ★</div>
        <div className="heat-cell h-crit">CRIT</div>

        <div className="heat-label">Medio</div>
        <div className="heat-cell h-bajo">BAJO</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-alto">ALTO</div>
        <div className="heat-cell h-crit">CRIT</div>

        <div className="heat-label">Bajo</div>
        <div className="heat-cell h-bajo">BAJO</div>
        <div className="heat-cell h-bajo">BAJO</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-alto">ALTO</div>

        <div className="heat-label">Muy Bajo</div>
        <div className="heat-cell h-bajo">BAJO</div>
        <div className="heat-cell h-bajo">BAJO</div>
        <div className="heat-cell h-bajo">BAJO</div>
        <div className="heat-cell h-mod">MOD</div>
        <div className="heat-cell h-mod">MOD</div>
      </div>
      <p className="heat-note">★ = posición de las vulnerabilidades identificadas</p>

      <div className="risk-items">
        <div className="risk-item">
          <span className="badge badge-critical">Crítico</span>
          <span className="risk-name">SQL Injection</span>
          <div className="risk-meta">
            <div className="risk-meta-label">Probabilidad: Muy Alta · Impacto: Muy Alto</div>
            <div className="risk-bar-wrap"><div className="risk-bar bar-red" style={{ '--w': '95%' }}></div></div>
          </div>
        </div>
        <div className="risk-item">
          <span className="badge badge-critical">Crítico</span>
          <span className="risk-name">Command Injection</span>
          <div className="risk-meta">
            <div className="risk-meta-label">Probabilidad: Alta · Impacto: Muy Alto</div>
            <div className="risk-bar-wrap"><div className="risk-bar bar-red" style={{ '--w': '88%' }}></div></div>
          </div>
        </div>
        <div className="risk-item">
          <span className="badge badge-critical">Crítico</span>
          <span className="risk-name">Reflected XSS</span>
          <div className="risk-meta">
            <div className="risk-meta-label">Probabilidad: Alta · Impacto: Alto</div>
            <div className="risk-bar-wrap"><div className="risk-bar bar-orange" style={{ '--w': '80%' }}></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ControlGroup({ badge, title, prevention, mitigation }) {
  return (
    <div className="control-group">
      <div className="control-group-header">
        <span className="badge badge-critical">{badge}</span>
        <span className="control-title">{title}</span>
      </div>
      <div className="control-col">
        <div>
          <h3 className="control-subhead">Prevención</h3>
          <ul className="control-list">
            {prevention.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="control-subhead">Mitigación</h3>
          <ul className="control-list">
            {mitigation.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PageControles({ setPage }) {
  return (
    <div className="page active">
      <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
      <div className="section-eyebrow">// 07 · remediación · 07_controles_galseb.md</div>
      <h2>Controles de Mitigación</h2>
      <p>Políticas de seguridad y controles técnicos recomendados para la prevención y mitigación de las vulnerabilidades identificadas en la infraestructura de ConectaTel.</p>

      <ControlGroup
        badge="SQL Injection"
        title="Políticas y Controles"
        prevention={[
          'Uso obligatorio de Prepared Statements en toda interacción con BD',
          'Prohibición de concatenación directa de entradas en consultas SQL',
          'Validación estricta de tipo, formato y longitud de entradas',
          'Principio de mínimo privilegio en cuentas de base de datos',
        ]}
        mitigation={[
          'Implementación de ORMs seguros (Hibernate, Sequelize, Entity Framework)',
          'Web Application Firewall (WAF) con reglas contra SQL Injection',
          'Monitoreo de consultas anómalas con IDS/logging',
          'Segmentación de bases de datos para limitar el impacto',
          'Auditorías periódicas de código y pruebas de penetración',
        ]}
      />

      <ControlGroup
        badge="Reflected XSS"
        title="Políticas y Controles"
        prevention={[
          'Sanitización y escape de toda entrada antes de mostrarla en el navegador',
          'Codificación de salida contextual (HTML, JavaScript, URL)',
          'Prohibición de entradas sin validación en contenido dinámico',
          'Implementación de Content Security Policy (CSP) estricta',
        ]}
        mitigation={[
          'Cabeceras: Content-Security-Policy, X-XSS-Protection, X-Content-Type-Options',
          'Frameworks modernos con escape automático (React, Angular, Vue)',
          'Validación y sanitización centralizada en backend',
          'Monitoreo de tráfico HTTP para detectar payloads maliciosos',
          'Capacitación a desarrolladores en desarrollo seguro',
        ]}
      />

      <ControlGroup
        badge="Command Injection"
        title="Políticas y Controles"
        prevention={[
          'Prohibición del uso directo de comandos del SO con entrada de usuario',
          'Funciones que ejecuten comandos del sistema deben estar restringidas',
          'Validación por listas blancas (whitelisting) cuando sea necesario',
          'Procesos del sistema con privilegios mínimos necesarios',
        ]}
        mitigation={[
          'Reemplazo de llamadas a shell por APIs seguras del lenguaje',
          'Contenedores (Docker) para aislar procesos críticos',
          'AppArmor / SELinux para restricción de ejecución de comandos',
          'Monitoreo mediante EDR (Endpoint Detection and Response)',
          'Segmentación de red para limitar movimiento lateral',
        ]}
      />
    </div>
  )
}

function ScenarioCard({ num, title, badge, steps }) {
  return (
    <div className="scenario-card">
      <div className="scenario-header">
        <span className="scenario-num">{num}</span>
        <span className="scenario-title">{title}</span>
        <span className="badge badge-critical" style={{ marginLeft: 'auto' }}>{badge}</span>
      </div>
      <div className="steps-list">
        {steps.map((s, i) => (
          <div className="step-item" key={i}>
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div className="step-label">{s.label}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PageRecuperacion({ setPage }) {
  return (
    <div className="page active">
      <button className="back-btn" onClick={() => setPage('home')}>← volver al inicio</button>
      <div className="section-eyebrow">// 08 · plan de recuperación · 08_recuperacion_galseb.md</div>
      <h2>Plan de Recuperación ante Desastres</h2>
      <p>Plan de respuesta a incidentes adaptado para los escenarios de compromiso identificados durante la auditoría de ConectaTel.</p>

      <ScenarioCard
        num="ESC-01"
        title="Borrado / Robo de Base de Datos de Clientes"
        badge="Crítico"
        steps={[
          { label: 'Detección e Identificación', desc: 'Asignar ID de incidente. Aislar la base de datos comprometida. Preservar evidencia forense sin alterarla.' },
          { label: 'Contención', desc: 'Bloquear accesos no autorizados. Detener posible exfiltración en curso. Activar WAF con reglas de emergencia.' },
          { label: 'Recuperación', desc: 'Restaurar backup verificado en entorno aislado. Aplicar binary logs para recuperar transacciones recientes.' },
          { label: 'Validación', desc: 'Ejecutar pruebas de integridad. Comparar conteos de registros. Retorno gradual al entorno de producción.' },
          { label: 'Acciones Post-Incidente', desc: 'Rotación de credenciales. Elaborar informe de causa raíz y lecciones aprendidas.' },
        ]}
      />

      <ScenarioCard
        num="ESC-02"
        title="Compromiso de Routers Core vía RCE"
        badge="Crítico"
        steps={[
          { label: 'Detección e Identificación', desc: 'Asignar ID de incidente. Activar equipo de redes. Aplicar ACLs temporales de emergencia para limitar el daño.' },
          { label: 'Contención', desc: 'Desviar tráfico hacia rutas alternativas. Aislar el router comprometido de la infraestructura de producción.' },
          { label: 'Recuperación', desc: 'Reinstalar firmware/imagen segura desde fuente verificada. Restaurar configuración desde backup íntegro.' },
          { label: 'Validación', desc: 'Pruebas end-to-end de conectividad. Revisar NetFlow y logs de enrutamiento. Monitorizar tráfico durante 72h.' },
          { label: 'Acciones Post-Incidente', desc: 'Hardening de equipos de red. Restringir acceso de gestión (MFA, IPs autorizadas). Auditar plano de control.' },
        ]}
      />
    </div>
  )
}

// ─────────────────────────── APP SHELL ──────────────────────────────────────

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'resumen':     return <PageResumen     setPage={setPage} />
      case 'sql':         return <PageSQL          setPage={setPage} />
      case 'xss':         return <PageXSS          setPage={setPage} />
      case 'cmd':         return <PageCMD          setPage={setPage} />
      case 'activos':     return <PageActivos      setPage={setPage} />
      case 'matriz':      return <PageMatriz       setPage={setPage} />
      case 'controles':   return <PageControles    setPage={setPage} />
      case 'recuperacion':return <PageRecuperacion setPage={setPage} />
      default:            return <PageHome         setPage={setPage} />
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
          {navSections.map((section) => (
            <div key={section.label}>
              <div className="nav-section-label">{section.label}</div>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className={`nav-link ${page === item.id ? 'active' : ''}`}
                  onClick={() => setPage(item.id)}
                >
                  <span className={`dot ${item.dot}`}></span>
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="nav-footer">Entorno de laboratorio<br />Simulación de producción</div>
      </nav>

      <main className="main-content">{renderPage()}</main>
    </div>
  )
}

export default App