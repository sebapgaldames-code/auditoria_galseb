# Matriz de Riesgo

La siguiente matriz de riesgo relaciona la **probabilidad de explotación** de las vulnerabilidades identificadas durante la auditoría con su **impacto en el negocio** de ConectaTel. La evaluación permite priorizar las acciones de mitigación sobre aquellos riesgos que representan una mayor amenaza para la confidencialidad, integridad y disponibilidad de los activos críticos de la organización.

## Leyenda

- 🟩 Riesgo Bajo
- 🟨 Riesgo Moderado
- 🟧 Riesgo Alto
- 🟥 Riesgo Crítico

## Mapa de Calor

| **Impacto / Probabilidad** | **Muy Baja** | **Baja** | **Media** | **Alta** | **Muy Alta** |
|----------------------------|:------------:|:--------:|:---------:|:--------:|:------------:|
| **Muy Alto** | 🟨 | 🟧 | 🟥 | 🟥 | 🟥 |
| **Alto** | 🟨 | 🟨 | 🟧 | 🟥 | 🟥 |
| **Medio** | 🟩 | 🟨 | 🟨 | 🟧 | 🟥 |
| **Bajo** | 🟩 | 🟩 | 🟨 | 🟨 | 🟧 |
| **Muy Bajo** | 🟩 | 🟩 | 🟩 | 🟨 | 🟨 |

## Evaluación de las Vulnerabilidades

| Vulnerabilidad | Probabilidad | Impacto | Nivel de Riesgo |
|----------------|--------------|---------|-----------------|
| SQL Injection | Muy Alta | Muy Alto | 🟥 Crítico |
| Command Injection | Alta | Muy Alto | 🟥 Crítico |
| Reflected XSS | Alta | Alto | 🟥 Crítico |

## Análisis

Los resultados de la matriz muestran que las vulnerabilidades de **SQL Injection** y **Command Injection** representan el mayor nivel de riesgo para ConectaTel, debido a su alta probabilidad de explotación y al impacto directo sobre los sistemas críticos y la información de los clientes. Ambas permiten comprometer activos esenciales, afectando la confidencialidad, integridad y disponibilidad de los servicios.

La vulnerabilidad de **Reflected Cross-Site Scripting (XSS)** también presenta un riesgo crítico, principalmente por la posibilidad de comprometer sesiones de usuarios, obtener credenciales y ejecutar acciones en nombre de clientes autenticados. En conjunto, los hallazgos evidencian la necesidad de priorizar la remediación inmediata de estas vulnerabilidades como parte del plan de fortalecimiento de la seguridad de ConectaTel.