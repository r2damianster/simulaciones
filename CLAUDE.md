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
| `financiamiento_etica.html` | `#14110d` (dark warm) | `#D4A24E` (gold) + `#7ba7c9` (steel blue) | Despacho del investigador — cartas con membrete, sello de goma, mapa enmarcado como monitor |
| `disenos.html` | `#060d06` (dark green) | `#34D399` (emerald, ex-matrix `#00ff41`) | Terminal/lab elegante — BRAIN y PINKY en jaulas animadas que reaccionan al diseño ejecutado |
| `apa7.html` | `#141210` (dark warm) | `#D4A853` (gold) | Editorial académico / Tailwind |
| `apa7_2.html` | `#1E1E1E` (VS Code dark) | `#D4A853` (gold) | Editor de código / Word-like ribbon |
| `evaluaciones_lectura.html` | `#0d0f12` (dark slate) | `#D4A24E` (gold) | Editorial caligráfico / papel manuscrito, Tailwind |
| `muestreo.html` | `#0A1410` (dark green) | `#34D399` (emerald) | Paisaje ecológico / naturaleza orgánica |
| `peel.html` | `#14110d` (dark warm) | `#D4A24E` (gold) | Cuaderno del escritor — párrafo se escribe a mano con pluma animada sobre papel de renglones |
| `conectores.html` | `#171310` (dark warm industrial) | `#d4af37` (gold) + `#34D399` (emerald, ex-neon) | Operario de la máquina — tira de palanca, estampa conectores en cinta de producción |

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
