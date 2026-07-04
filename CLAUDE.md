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
| `apa7.html` | Simulación Formato APA 7 | Redacción académica — corrección de manuscrito con errores de formato APA 7.ª ed. |
| `apa7_2.html` | Editor APA 7 — Cinta de herramientas | Redacción académica — editor estilo Word por fases, ribbon interactivo, desbloqueo secuencial |
| `peel.html` | Constructor PEEL - Drag & Drop | Redacción argumentativa — estructura PEEL (Punto, Evidencia, Explicación, Link), arrastrar frases a slots correctos |
| `evaluaciones_lectura.html` | Evaluación Lectora — Ciencias Naturales | Comprensión lectora — rúbrica progresiva (literal, inferencial, crítico) sobre escritos de estudiantes de 3° a 8° básico |
| `muestreo.html` | Simulador de Muestreos | Estadística — técnicas probabilísticas y no probabilísticas, simulaciones visuales con poblaciones de plantas, personas y fábricas |
| `conectores.html` | Máquina de Engranajes Argumentativos | Redacción académica — conectores discursivos (adición, causalidad, contraste, ejemplificación, orden temporal, conclusión); mecánica 2-paso: tipo de relación → conector exacto; puntuación sobre 100, -5 por error |

Documentación de contexto de cada simulación: `.claude/Simulaciones/`

---

## Stack técnico

- **HTML5** semántico
- **CSS3** con variables `:root`, Flexbox/Grid, animaciones
- **JavaScript** Vanilla (sin frameworks)
- **Fuentes CDN**: Google Fonts (Playfair Display, Source Sans 3, Orbitron, Share Tech Mono)
- **Iconos CDN**: Font Awesome 6.5
- **CSS framework opcional**: Tailwind CDN (en `disenos.html` y `apa7.html`)

### Index.html — Contadores dinámicos

- **Contador de simulaciones:** Actualizado dinámicamente desde el DOM con `document.querySelectorAll('.sim-out').length` (nunca hardcodeado).
- **Contador de lanzamientos:** Suma todos los `.sim-out[data-key]` desde localStorage, automáticamente incluye nuevas simulaciones.
- **Seguimiento de progreso:** Las 9 sims escriben `localStorage.setItem('simlab_done_<key>', Date.now())` en pantalla final; index.html lee estas claves y muestra badge «✓ Completada» en tarjetas.

---

## Convenciones de diseño

### Paletas por simulación

| Simulación | Fondo | Acento | Estilo |
|---|---|---|---|
| `observación.html` | `#1C1917` (dark warm) | `#D97706` (amber) | Premium editorial dark |
| `financiamiento_etica.html` | `#f4f6f8` (light) | azul ONU / verde / naranja | Institucional |
| `disenos.html` | `#060d06` (dark green) | `#00ff41` (matrix green) | Terminal / cyberpunk |
| `apa7.html` | `#141210` (dark warm) | `#D4A853` (gold) | Editorial académico / Tailwind |
| `apa7_2.html` | `#1E1E1E` (VS Code dark) | `#D4A853` (gold) | Editor de código / Word-like ribbon |
| `evaluaciones_lectura.html` | `#0d0f12` (dark slate) | `#D4A24E` (gold) | Editorial caligráfico / papel manuscrito, Tailwind |
| `muestreo.html` | `#0A1410` (dark green) | `#34D399` (emerald) | Paisaje ecológico / naturaleza orgánica |
| `peel.html` | `#1a1a2e` (dark blue) | `#3498db` (blue) | Construcción modular / arquitectura |
| `conectores.html` | `#1a1a1d` (dark industrial) | `#d4af37` (gold) + `#39ff14` (neon green) | Mecánica industrial / engranajes |

### Patrones de código JS

- Estado global en objeto `state` (no localStorage, reinicio al refrescar)
- Diálogos dinámicos vía `addDialog(speaker, text, cssClass)`
- Botones dinámicos vía `addButton(label, callback)`
- Fases numeradas: `startPhase1()`, `startPhase2()`, `startPhase3()`
- Fin de juego: `endGame()` muestra modal con veredicto y puntaje

---

## Snippets canónicos

### Back-link unificado (fijo esquina superior izquierda)

Todas las simulaciones tienen un back-link canónico en **posición fija top:14px left:14px**, con variables CSS parametrizadas por paleta de cada sim:

```html
<a href="index.html" class="sim-home" title="Volver al inicio" aria-label="Volver al inicio del SimLab">
  <i class="fa-solid fa-house" aria-hidden="true"></i>
</a>
```

Cada simulación define en `:root`:
```css
:root {
  --sim-home-fg: #D97706;           /* color texto normal */
  --sim-home-bg: rgba(217,119,6,0.15); /* fondo */
  --sim-home-bd: rgba(217,119,6,0.3);  /* borde */
  --sim-home-hi: #F59E0B;           /* color hover */
}
```

CSS común (incluir en todas):
```css
.sim-home{position:fixed;top:14px;left:14px;z-index:200;width:40px;height:40px;
  display:flex;align-items:center;justify-content:center;text-decoration:none;
  color:var(--sim-home-fg, #888);background:var(--sim-home-bg, rgba(0,0,0,.35));
  border:1px solid var(--sim-home-bd, rgba(255,255,255,.15));border-radius:10px;
  transition:transform .2s, color .2s}
.sim-home:hover,.sim-home:focus-visible{color:var(--sim-home-hi, #fff);transform:scale(1.06)}
```

### Progreso del estudiante (localStorage)

En la **función de pantalla final** de cada simulación (inmediatamente antes del return o al inicio), insertar:
```javascript
localStorage.setItem('simlab_done_CLAVE', Date.now());
```

Donde `CLAVE` es:
- observación.html: `simlab_obs`
- financiamiento_etica.html: `simlab_fin`
- disenos.html: `simlab_des`
- apa7.html: `simlab_apa`
- apa7_2.html: `simlab_apa2`
- peel.html: `simlab_peel`
- evaluaciones_lectura.html: `simlab_eval`
- muestreo.html: `simlab_mue`
- conectores.html: `simlab_con`

En `index.html`, el JavaScript lee estas claves y muestra badge «✓ Completada» en las tarjetas correspondientes.

### Obtenernobraestudiantr (sessionStorage)

Todas las 9 simulaciones reutilizan una función **idéntica** (duplicada intencionalmente por autosuficiencia):

```javascript
function obtenerNombreUsuario(callback) {
  const nombre = sessionStorage.getItem('nombreEstudianteSim');
  if (nombre) {
    callback(nombre);
    return;
  }
  const overlay = document.createElement('div');
  overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.72);
    display:flex;align-items:center;justify-content:center;z-index:99999;backdrop-filter:blur(5px)`;
  const modal = document.createElement('div');
  modal.style.cssText = `background:var(--card, #222);border:1px solid var(--border, rgba(255,255,255,0.1));
    border-radius:12px;padding:32px;max-width:400px;text-align:center;`;
  modal.innerHTML = `
    <p style="font-size:16px;color:var(--txt, #fff);margin-bottom:24px;font-weight:600">¿Cómo te llamas?</p>
    <input type="text" id="input-nombre" style="width:100%;padding:10px 14px;border:1px solid var(--border, rgba(255,255,255,0.2));
      border-radius:8px;font-size:14px;font-family:inherit;background:var(--bg, #111);color:var(--txt, #fff);margin-bottom:16px"
      placeholder="Ingresa tu nombre" autocomplete="off">
    <p style="font-size:12px;color:var(--txt-3, #999);margin-bottom:20px">No te preguntaremos otra vez en esta sesión.</p>
    <button id="btn-continuar" style="background:var(--accent, #818cf8);color:var(--bg, #000);border:none;
      padding:10px 28px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit">Continuar</button>
  `;
  modal.appendChild(modal);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  const inputNombre = modal.querySelector('#input-nombre');
  const btnContinuar = modal.querySelector('#btn-continuar');
  const submit = () => {
    const nombre = inputNombre.value.trim() || 'Estudiante';
    sessionStorage.setItem('nombreEstudianteSim', nombre);
    overlay.remove();
    callback(nombre);
  };
  btnContinuar.addEventListener('click', submit);
  inputNombre.addEventListener('keypress', e => e.key === 'Enter' && submit());
  inputNombre.focus();
}
```

**Uso en pantalla final:** `obtenerNombreUsuario(nombre => { /* usa 'nombre' aquí */ })`

---

## Reglas para Claude

- **Nunca romper la autosuficiencia** de cada archivo HTML: no separar en múltiples archivos.
- Respetar la identidad visual de cada simulación (no mezclar paletas).
- Al añadir fases, seguir el patrón `startPhaseX()` y actualizar `endGame()`.
- Los textos pedagógicos deben mantener rigor científico (nivel universitario/posgrado).
- Codificación: **UTF-8** siempre. Verificar que las tildes y ñ queden correctas.
- No commitear sin instrucción explícita.
- **Toda nueva simulación** debe: (1) enlazarse en `index.html` (tarjeta en `#simulaciones`, sim-grid con clase CSS propia), (2) listarse en la tabla "Simulaciones activas" de este archivo, (3) incluir botón/enlace `href="index.html"` para volver al inicio, (4) implementar captura de nombre del estudiante. Un hook (`PostToolUse:Write` → `.claude/hooks/check-sim-link.js`) recuerda esto automáticamente al crear el archivo.
- **Captura de nombre obligatoria en pantalla final:** toda simulación debe incluir la función `obtenerNombreUsuario(callback)` que: usa `sessionStorage.getItem/setItem('nombreEstudianteSim')` para no preguntar dos veces en la misma sesión; si no hay nombre guardado, muestra un overlay modal con input + botón "Continuar"; llama `callback(nombre)` al confirmar. La pantalla final (`endGame()`, `showFinalScreen()` o equivalente) debe llamar `obtenerNombreUsuario(nombre => { ... })` y personalizar el mensaje con el nombre. Colores del overlay deben respetar la paleta de la simulación (usar variables CSS de la simulación para borde y acento).

---

## Avatar del profesor

`avatarProfeArturito.png` — Imagen del docente usada como personaje en las simulaciones.

---

## Instrucción de flujo narrativo

Al analizar o modificar simulaciones, enfocarse en la lógica de transiciones entre `addDialog` y `addButton`, ya que estas controlan el flujo narrativo y la experiencia del usuario.
