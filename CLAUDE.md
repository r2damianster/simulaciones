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
| `constructos.html` | Constructor de Constructos Teóricos | Epistemología — operacionalización de conceptos, validez de constructos, identificar alucinaciones de IA |
| `constructos_IA.html` | SimulAI — Alucinaciones en la Investigación | Metodología — detección de alucinaciones en construcción de constructos; verificación en Scopus; tipología de adjetivación espuria, fusión cross-field, citas fabricadas |
| `revista.html` | OJS — Envío de Artículos Científicos | Metodología de publicación — proceso de envío, declaraciones éticas, metadatos, revisión por pares, evaluación a ciegas |
| `mundoSofia1.html` | El Mundo de Sofía — El Jardín del Edén | Filosofía — primer capítulo de la novela de Jostein Gaarder, narrativa interactiva sobre identidad, existencia y origen del universo |

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
| `financiamiento_etica.html` | `#14110d` (dark warm) | `#D4A24E` (gold) + `#7ba7c9` (steel blue) | Despacho del investigador — cartas con membrete, sello de goma, mapa enmarcado como monitor |
| `disenos.html` | `#060d06` (dark green) | `#34D399` (emerald, ex-matrix `#00ff41`) | Terminal/lab elegante — BRAIN y PINKY en jaulas animadas que reaccionan al diseño ejecutado |
| `apa7.html` | `#141210` (dark warm) | `#D4A853` (gold) | Editorial académico / Tailwind |
| `apa7_2.html` | `#1E1E1E` (VS Code dark) | `#D4A853` (gold) | Editor de código / Word-like ribbon |
| `evaluaciones_lectura.html` | `#0d0f12` (dark slate) | `#D4A24E` (gold) | Editorial caligráfico / papel manuscrito, Tailwind |
| `muestreo.html` | `#0A1410` (dark green) | `#34D399` (emerald) | Paisaje ecológico / naturaleza orgánica |
| `peel.html` | `#14110d` (dark warm) | `#D4A24E` (gold) | Cuaderno del escritor — párrafo se escribe a mano con pluma animada sobre papel de renglones |
| `conectores.html` | `#171310` (dark warm industrial) | `#d4af37` (gold) + `#34D399` (emerald, ex-neon) | Operario de la máquina — tira de palanca, estampa conectores en cinta de producción |
| `constructos_IA.html` | `#080c14` (dark tech/AI) | `#10a37f` (emerald AI) | ChatGPT-like browser mock — avatar dinámico, chat interactivo, Scopus simulado, detección de alucinaciones |
| `mundoSofia1.html` | `#0F1A0F` (dark forest) | `#C9975B` (gold) | Narrativa literaria por escenas — pétalos/luciérnagas animados en canvas, buzón interactivo, espejo con webcam, moneda 3D (vida/muerte) |

**Nota de rediseño (2026-07):** `peel.html`, `conectores.html`, `disenos.html` y `financiamiento_etica.html` fueron re-diseñadas para alinear su identidad visual con las simulaciones favoritas del usuario (observación, evaluaciones_lectura, muestreo, apa7/apa7_2): fondo oscuro cálido, acento dorado/esmeralda, tipografía serif en títulos. Más importante: cada una ganó un **elemento concreto/humano** que hace tangible la mecánica pedagógica (no solo estética) — ver detalle en cada fila de la tabla.

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

Donde `CLAVE` es el `data-key` de la tarjeta en index.html (la clave completa queda `simlab_done_simlab_*`):
- observación.html: `simlab_obs` → `simlab_done_simlab_obs`
- financiamiento_etica.html: `simlab_fin` → `simlab_done_simlab_fin`
- disenos.html: `simlab_des` → `simlab_done_simlab_des`
- apa7.html: `simlab_apa` → `simlab_done_simlab_apa`
- apa7_2.html: `simlab_apa2` → `simlab_done_simlab_apa2`
- peel.html: `simlab_peel` → `simlab_done_simlab_peel`
- evaluaciones_lectura.html: `simlab_eval` → `simlab_done_simlab_eval`
- muestreo.html: `simlab_mue` → `simlab_done_simlab_mue`
- conectores.html: `simlab_con` → `simlab_done_simlab_con`
- constructos.html: `simlab_constructos` → `simlab_done_simlab_constructos`
- constructos_IA.html: `simlab_constructos_ia` → `simlab_done_simlab_constructos_ia`

En `index.html`, `isSimDone(key)` lee `simlab_done_${key}` (donde `key` = `data-key`) y muestra badge «✓ Completada».

**⚠ Bug histórico (en corrección progresiva, 2026-07):** las sims escribían la clave corta (`simlab_obs`) en vez de `simlab_done_simlab_obs`. Eso impedía el badge Y corrompía el contador de lanzamientos (el `Date.now()` pisaba el conteo de `incCount`, que usa la clave corta). Al tocar cada sim en el trabajo i18n, corregir su `setItem` al formato largo.

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
    <p style="font-size:16px;color:var(--txt, #fff);margin-bottom:24px;font-weight:600">${t('name_q')}</p>
    <input type="text" id="input-nombre" style="width:100%;padding:10px 14px;border:1px solid var(--border, rgba(255,255,255,0.2));
      border-radius:8px;font-size:14px;font-family:inherit;background:var(--bg, #111);color:var(--txt, #fff);margin-bottom:16px"
      placeholder="${t('name_ph')}" autocomplete="off">
    <p style="font-size:12px;color:var(--txt-3, #999);margin-bottom:20px">${t('name_note')}</p>
    <button id="btn-continuar" style="background:var(--accent, #818cf8);color:var(--bg, #000);border:none;
      padding:10px 28px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit">${t('name_btn')}</button>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  const inputNombre = modal.querySelector('#input-nombre');
  const btnContinuar = modal.querySelector('#btn-continuar');
  const submit = () => {
    const nombre = inputNombre.value.trim() || t('name_default');
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

Requiere el bloque i18n (las claves `name_q`, `name_ph`, `name_note`, `name_btn`, `name_default` van en `I18N`).

### i18n ES/EN (diccionario embebido + toggle)

Todo archivo (index + sims) es bilingüe ES/EN. Idioma persistido en `localStorage['simlab_lang']` (default `'es'`), compartido entre index y sims. Patrón **híbrido**: `t(clave)` para UI corta; **ramas de datos completas por idioma** para contenido pedagógico. La rama se elige una vez al cargar — el cambio de idioma siempre recarga la página, así `LANG` es constante.

Bloque canónico (compartido-por-copia, al inicio del `<script>` de cada archivo):

```javascript
/* === i18n === */
function getLang(){ return localStorage.getItem('simlab_lang') === 'en' ? 'en' : 'es'; }
function setLang(l){ localStorage.setItem('simlab_lang', l); }
const LANG = getLang();
document.documentElement.lang = LANG;

const I18N = {
  es: { confirm_switch:'Cambiar el idioma reiniciará la simulación. ¿Continuar?',
        name_q:'¿Cómo te llamas?', name_ph:'Ingresa tu nombre',
        name_note:'No te preguntaremos otra vez en esta sesión.', name_btn:'Continuar',
        name_default:'Estudiante' /* + claves de UI usadas desde JS */ },
  en: { confirm_switch:'Switching language will restart the simulation. Continue?',
        name_q:'What is your name?', name_ph:'Enter your name',
        name_note:'We will not ask again during this session.', name_btn:'Continue',
        name_default:'Student',
        page_title:'…', meta_desc:'…' /* + TODAS las claves data-i18n del HTML */ }
};
function t(k){ return (I18N[LANG] && I18N[LANG][k]) || I18N.es[k] || k; }

/* Datos pedagógicos: rama por idioma, MISMO shape en ambas (misma cardinalidad y campos) */
const ROUNDS_ALL = { es: [/* ES */], en: [/* EN */] };
const ROUNDS = ROUNDS_ALL[LANG];   // el resto del código no cambia

/* Sweep de texto estático (solo actúa en EN; el markup se autoría en ES) */
function applyStaticI18n(){
  if (LANG === 'es') return;
  document.title = t('page_title');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.content = t('meta_desc');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
}
applyStaticI18n();
```

Marcado del HTML estático (autoría siempre en ES; los valores del diccionario pueden llevar `<strong>`/`<em>` — el sweep usa `innerHTML`, nunca meter input del usuario en el diccionario):

```html
<h1 data-i18n="hero_title">Título en español…</h1>
<a href="index.html" class="sim-home" title="Volver al inicio" aria-label="Volver al inicio del SimLab"
   data-i18n-title="back_title" data-i18n-aria="back_title">…</a>
<input placeholder="Ingresa tu nombre" data-i18n-ph="name_ph">
```

Toggle canónico `.sim-lang` — espejo del `.sim-home`, fijo **top:14px right:14px**, reutiliza las variables `--sim-home-*` de la paleta. Muestra el idioma **destino**:

```html
<button type="button" class="sim-lang" id="simLangBtn" aria-label="Cambiar idioma / Switch language"></button>
```
```css
.sim-lang{position:fixed;top:14px;right:14px;z-index:200;min-width:40px;height:40px;padding:0 10px;
  display:flex;align-items:center;justify-content:center;cursor:pointer;
  font-weight:600;font-size:13px;letter-spacing:.06em;font-family:inherit;
  color:var(--sim-home-fg,#888);background:var(--sim-home-bg,rgba(0,0,0,.35));
  border:1px solid var(--sim-home-bd,rgba(255,255,255,.15));border-radius:10px;
  transition:transform .2s,color .2s}
.sim-lang:hover,.sim-lang:focus-visible{color:var(--sim-home-hi,#fff);transform:scale(1.06)}
```
```javascript
const langBtn = document.getElementById('simLangBtn');
langBtn.textContent = LANG === 'es' ? 'EN' : 'ES';
langBtn.addEventListener('click', () => {
  if (!confirm(t('confirm_switch'))) return;   // en index.html: sin confirm (no hay estado que perder)
  setLang(LANG === 'es' ? 'en' : 'es');
  location.reload();
});
```

Reglas del patrón:
- **Sims:** confirm + reload (reinicia la sim; el estado ya se pierde al refrescar). **index.html:** sin confirm, solo `setLang` + reload.
- Ambas ramas de `*_ALL` deben tener **shape idéntico** (mismos campos, misma cardinalidad de rondas/slots/opciones) — el código lo asume.
- La rama EN es **adaptación pedagógica**, no traducción literal (ej.: conectores usa conectores ingleses; peel usa frases en inglés).
- `I18N.es` solo necesita claves usadas desde JS; `I18N.en` necesita todas (incl. `page_title`, `meta_desc` y las `data-i18n`).

---

## Reglas para Claude

- **Nunca romper la autosuficiencia** de cada archivo HTML: no separar en múltiples archivos.
- Respetar la identidad visual de cada simulación (no mezclar paletas).
- Al añadir fases, seguir el patrón `startPhaseX()` y actualizar `endGame()`.
- Los textos pedagógicos deben mantener rigor científico (nivel universitario/posgrado).
- Codificación: **UTF-8** siempre. Verificar que las tildes y ñ queden correctas.
- **Bilingüe ES/EN obligatorio:** toda simulación (nueva o editada) debe funcionar 100% en ambos idiomas con el patrón i18n canónico (diccionario embebido, nunca `translations.js` compartido; idioma en `localStorage['simlab_lang']`; toggle `.sim-lang` top-right; `<html lang>` dinámico; contenido pedagógico como adaptación, no traducción literal). *(Adopción progresiva 2026-07: fases 0-2 completas (index, apa7, apa7_2, peel); fase 3-8 en curso (muestreo, conectores, financiamiento, disenos, evaluaciones, observación, constructos).)*
- No commitear sin instrucción explícita.
- **Toda nueva simulación** debe: (1) enlazarse en `index.html` (tarjeta en `#simulaciones`, sim-grid con clase CSS propia), (2) listarse en la tabla "Simulaciones activas" de este archivo, (3) incluir botón/enlace `href="index.html"` para volver al inicio, (4) implementar captura de nombre del estudiante. Un hook (`PostToolUse:Write` → `.claude/hooks/check-sim-link.js`) recuerda esto automáticamente al crear el archivo.
- **Captura de nombre obligatoria en pantalla final:** toda simulación debe incluir la función `obtenerNombreUsuario(callback)` que: usa `sessionStorage.getItem/setItem('nombreEstudianteSim')` para no preguntar dos veces en la misma sesión; si no hay nombre guardado, muestra un overlay modal con input + botón "Continuar"; llama `callback(nombre)` al confirmar. La pantalla final (`endGame()`, `showFinalScreen()` o equivalente) debe llamar `obtenerNombreUsuario(nombre => { ... })` y personalizar el mensaje con el nombre. Colores del overlay deben respetar la paleta de la simulación (usar variables CSS de la simulación para borde y acento).

---

## Avatar del profesor

`avatarProfeArturito.png` — Imagen del docente usada como personaje en las simulaciones.

---

## Incorporación de Nueva Simulación — Workflow Automatizado

Cuando el usuario pega un HTML de simulación y pide que se incorpore, seguir este workflow:

### Paso 1: Escribir el archivo HTML (Automático)

El usuario proporciona un HTML (SPA completo: HTML5 + CSS3 + Vanilla JS). Claude escribe el archivo en `c:\Users\User\Documents\Desarrollo Web\Simulaciones\NOMBRE.html`.

**Hook automático dispara:** `normalize-new-sim.js` lee el archivo recién escrito y ejecuta:
- ✓ Inyecta `<meta name="description">` (si falta)
- ✓ Inyecta favicon SVG data-URI
- ✓ Inyecta variables CSS `--sim-home-*` (paleta parametrizada)
- ✓ Inyecta back-link canónico (esquina fijo top:14px left:14px)
- ✓ Inyecta `localStorage.setItem('simlab_done_<clave>', Date.now())` en función pantalla final
- ✓ Inyecta `obtenerNombreUsuario()` si falta
- ✓ Genera archivo .md documentación en `.claude/Simulaciones/`

### Paso 2: Ediciones manuales por Claude (críticas)

Después de que el hook normaliza, Claude DEBE ejecutar MANUALMENTE:

1. **Generar tarjeta para index.html**
   - Copiar patrón de tarjeta existente (ej. observación.html)
   - Llenar: `data-cat`, `data-key`, `data-file`, título, descripción, duración, dificultad, icono emoji
   - Insertar en `.sim-grid` (respetando orden alfabético o de temas)
   
   Patrón mínimo:
   ```html
   <!-- NUEVO NOMBRE -->
   <div class="sim-out CLAVE reveal dX" data-cat="CATEGORIA" data-key="simlab_CLAVE" data-file="ARCHIVO.html">
     <input type="hidden" data-done>
     <div class="sim-badge-done">✓ Completada</div>
     <a href="ARCHIVO.html" class="sim-out-link" style="display:block;height:100%;position:relative;z-index:1;">
       <div class="sim-in">
         <div class="sim-thumb">
           <span class="sim-thumb-icon" aria-hidden="true">EMOJI</span>
         </div>
         <div class="sim-body">
           <span class="sim-tag">CATEGORÍA</span>
           <div class="sim-title">TÍTULO</div>
           <p class="sim-desc">Descripción breve, 1 frase.</p>
           <div class="sim-meta">
             <span class="sim-meta-chip">⏱ ~X min</span>
             <span class="sim-meta-chip">Nivel</span>
           </div>
           <button class="btn-sim" style="background:none;border:none;padding:10px 18px;cursor:pointer;">
             Iniciar Simulación
             <span class="btn-sim-ico">→</span>
           </button>
         </div>
       </div>
     </a>
   </div>
   ```

2. **Completar .md de documentación**
   - El hook genera un .md esqueleto en `.claude/Simulaciones/CLAVE.md`
   - Claude completa: marco metodológico, tipologías, sesgos comunes, referencias
   - Formato: títulos H2-H3, tablas Markdown, listas con viñetas

3. **Agregar entrada en CLAUDE.md tabla "Simulaciones activas"**
   ```
   | `ARCHIVO.html` | TÍTULO | CATEGORÍA — descripción breve |
   ```

4. **Verificar en navegador** (una sola vez)
   - Abrir index.html en navegador
   - Clicar en nueva tarjeta → debe abrir la sim
   - Verificar back-link fijo (esquina sup-izq)
   - Completar sim → debe escribir `localStorage.simlab_done_*`
   - Volver a index → debe mostrar badge ✓ Completada

### Paso 3: Protocolo i18n-BD (Bilingüe ES-EN + BD central de términos) — **Obligatorio desde 2026-07**

A partir de `constructos_IA.html`, toda nueva simulación DEBE ser **bilingüe desde el origen**. La arquitectura de i18n y la BD de términos establecen la pauta:

**BD Central:** `i18n/terminos_es_en.json`
- Fuente de verdad para terminología pedagógica y UI común
- Estructura: `{ "ui_comun": {...}, "terminos_pedagogicos": {...} }`
- Cada entrada registra `"sims": ["sim1", "sim2"]` para trazabilidad

**Patrón i18n en nueva sim (embebida, autosuficiente):**

1. **Bloque i18n estándar** (copiar de `constructos_IA.html`):
   ```javascript
   function getLang(){ return localStorage.getItem('simlab_lang') === 'en' ? 'en' : 'es'; }
   function setLang(l){ localStorage.setItem('simlab_lang', l); }
   const LANG = getLang();
   document.documentElement.lang = LANG;
   const I18N = { es: {...}, en: {...} };
   function t(k){ return (I18N[LANG] && I18N[LANG][k]) || I18N.es[k] || k; }
   ```

2. **Rama ES y EN de datos pedagógicos:**
   - Si la sim tiene arrays/objetos de contenido (rondas, opciones, tips, etc.)
   - Definir `const DATA_ALL = { es: [rondas ES], en: [rondas EN] };`
   - Luego `const DATA = DATA_ALL[LANG];`
   - **Ambas ramas deben tener shape idéntico** (misma cardinalidad, campos)

3. **Toggle de idioma `.sim-lang`:**
   - Fijo top-right, espejo de `.sim-home`
   - Show destino: `LANG === 'es' ? 'EN' : 'ES'`
   - Con confirm: `if (!confirm(t('confirm_switch'))) return; setLang(...); location.reload();`

4. **Población de BD:**
   - Consultar `i18n/terminos_es_en.json` para términos ya registrados
   - Si el término NO existe → añadirlo a la BD
   - Cada término añadido debe listar la sim nueva en `"sims": [...]`

5. **Verificación:**
   - Cambiar idioma en navegador (toggle lang)
   - Todos los strings deben reflejarse: UI, datos pedagógicos, botones, mensajes
   - No debería haber quebrantos visuales ni texto duplicado

**Razón del protocolo:** consistencia terminológica entre sims, mantenimiento centralizado, reutilización de traducción para UI común, reducción de duplicación.

### Referencia rápida: Claves y Categorías

**Categorías válidas:** `redaccion`, `metodologia`, `estadistica`, `etica`, `lectura`

**Claves de localStorage:** Derivadas del nombre archivo:
- `mi-nueva-sim.html` → `simlab_mi_nueva_sim`
- `algo.html` → `simlab_algo`
- (underscore reemplaza guiones, lowercase)

**Paletas predefinidas:**
```javascript
// En normalize-new-sim.js, agregar nueva entrada si es necesario
PALETAS.mi_nuevo_nombre = {
  fg: '#XXXXXX',       // color texto normal
  bg: 'rgba(...)',     // fondo
  bd: 'rgba(...)',     // borde
  hi: '#XXXXXX',       // color hover
};
```

### Checklist post-incorporación

- [ ] Hook `normalize-new-sim.js` ejecutó sin errores (revisar statusMessage)
- [ ] Archivo HTML tiene back-link en esquina
- [ ] Archivo HTML tiene meta description en `<head>`
- [ ] Archivo HTML tiene favicon
- [ ] Archivo HTML tiene variables `--sim-home-*` en `:root`
- [ ] Archivo HTML tiene `localStorage.setItem('simlab_done_...')` en función pantalla final
- [ ] Tarjeta insertada en index.html (con `data-cat`, `data-key`, `data-file`)
- [ ] .md documentación existe en `.claude/Simulaciones/`
- [ ] Entrada agregada en CLAUDE.md tabla "Simulaciones activas"
- [ ] Navegador: tarjeta cliqueable, sim abre, back-link funcional
- [ ] Navegador: completar sim → badge ✓ Completada aparece en index

### Mensajes de salida comunes del hook

**✓ HTML normalizado**
→ El script inyectó todos los snippets

**✓ Documentación creada: .claude/Simulaciones/CLAVE.md**
→ Se generó el .md esqueleto

**Próximos pasos manuales:**
→ Claude debe hacer tarjeta + actualizar CLAUDE.md

---

## Instrucción de flujo narrativo

Al analizar o modificar simulaciones, enfocarse en la lógica de transiciones entre `addDialog` y `addButton`, ya que estas controlan el flujo narrativo y la experiencia del usuario.
