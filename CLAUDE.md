# CLAUDE.md — Simulaciones ULEAM

## Contexto del proyecto

Colección de **simulaciones interactivas (Serious Games)** de carácter pedagógico para educación universitaria en metodología de investigación y estadística, desarrolladas por el Dr. Arturo Damián Rodríguez Zambrano (Docente universitario / Doctorando UPV-EHU).

Cada simulación es un archivo HTML autónomo (SPA) con HTML5 + CSS3 + Vanilla JS. No hay framework, no hay build step, no hay dependencias externas instaladas localmente (solo CDN).

---

## Simulaciones activas

| Archivo | Título | Tema |
|---|---|---|
| `observación.html` | Observación en Investigación Social | Metodología cualitativa — tipos de observación, notas de campo, sesgos |
| `financiamiento_etica.html` | El Dilema del Investigador 2.0 | Ética académica — revistas depredadoras, gestión de fondos ONU/CEDIA |
| `disenos.html` | Laboratorio ACME | Diseños experimentales — investigación conductual |

Documentación de contexto de cada simulación: `.claude/Simulaciones/`

---

## Stack técnico

- **HTML5** semántico
- **CSS3** con variables `:root`, Flexbox/Grid, animaciones
- **JavaScript** Vanilla (sin frameworks)
- **Fuentes CDN**: Google Fonts (Playfair Display, Source Sans 3, Orbitron, Share Tech Mono)
- **Iconos CDN**: Font Awesome 6.5
- **CSS framework opcional**: Tailwind CDN (solo en `disenos.html`)

---

## Convenciones de diseño

### Paletas por simulación

| Simulación | Fondo | Acento | Estilo |
|---|---|---|---|
| `observación.html` | `#1C1917` (dark warm) | `#D97706` (amber) | Premium editorial dark |
| `financiamiento_etica.html` | `#f4f6f8` (light) | azul ONU / verde / naranja | Institucional |
| `disenos.html` | `#060d06` (dark green) | `#00ff41` (matrix green) | Terminal / cyberpunk |

### Patrones de código JS

- Estado global en objeto `state` (no localStorage, reinicio al refrescar)
- Diálogos dinámicos vía `addDialog(speaker, text, cssClass)`
- Botones dinámicos vía `addButton(label, callback)`
- Fases numeradas: `startPhase1()`, `startPhase2()`, `startPhase3()`
- Fin de juego: `endGame()` muestra modal con veredicto y puntaje

---

## Reglas para Claude

- **Nunca romper la autosuficiencia** de cada archivo HTML: no separar en múltiples archivos.
- Respetar la identidad visual de cada simulación (no mezclar paletas).
- Al añadir fases, seguir el patrón `startPhaseX()` y actualizar `endGame()`.
- Los textos pedagógicos deben mantener rigor científico (nivel universitario/posgrado).
- Codificación: **UTF-8** siempre. Verificar que las tildes y ñ queden correctas.
- No commitear sin instrucción explícita.

---

## Avatar del profesor

`avatarProfeArturito.png` — Imagen del docente usada como personaje en las simulaciones.

---

## Instrucción de flujo narrativo

Al analizar o modificar simulaciones, enfocarse en la lógica de transiciones entre `addDialog` y `addButton`, ya que estas controlan el flujo narrativo y la experiencia del usuario.
