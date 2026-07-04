#!/usr/bin/env node
// check-fa-icons — PostToolUse hook (Write | Edit)
// Detecta el bug recurrente: un archivo usa iconos Font Awesome (<i class="fa-...">)
// pero no carga la libreria Font Awesome en <head> -> el icono queda vacio/invisible.
// Caso real: financiamiento_etica.html y conectores.html no cargan FA (usan emojis
// a proposito) pero el boton .sim-home seguia usando <i class="fa-solid fa-house">
// heredado del snippet canonico -> la "casita" para volver al inicio no se veia.

const fs = require('fs');
const path = require('path');

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', c => { raw += c; });
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(raw || '{}');
    if (data.tool_name !== 'Write' && data.tool_name !== 'Edit') process.exit(0);

    const filePath = (data.tool_input && data.tool_input.file_path) || '';
    if (!filePath.toLowerCase().endsWith('.html')) process.exit(0);
    if (!fs.existsSync(filePath)) process.exit(0);

    // Solo archivos dentro del proyecto Simulaciones (evita falsos positivos en
    // archivos de prueba/scratchpad escritos mientras se trabaja en este proyecto)
    const cwd = data.cwd || process.cwd();
    const projectRoot = path.resolve(cwd);
    if (!path.resolve(filePath).startsWith(projectRoot)) process.exit(0);

    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);

    const cargaFontAwesome = /font-awesome/i.test(content);
    const usaIconosFA = /class=["'][^"']*\bfa-(solid|regular|brands|light|thin)\b/i.test(content);

    if (usaIconosFA && !cargaFontAwesome) {
      // Detectar específicamente si es el boton de volver al inicio (.sim-home) el afectado
      const simHomeMatch = content.match(/<a[^>]*class=["'][^"']*sim-home[^"']*["'][^>]*>[\s\S]{0,120}?<\/a>/i);
      const afectaSimHome = simHomeMatch && /fa-solid|fa-regular|fa-brands/i.test(simHomeMatch[0]);

      let msg = `"${fileName}" usa iconos Font Awesome (<i class="fa-...">) pero NO carga la libreria Font Awesome en <head>. Los iconos quedaran vacios/invisibles.`;
      if (afectaSimHome) {
        msg += `\n  -> Esto afecta el boton "Volver al inicio" (.sim-home): la casita no se ve.`;
      }
      msg += `\nArregla reemplazando los <i class="fa-..."> por un emoji equivalente (ej. 🏠 para fa-house, ↺ para fa-rotate, ← para fa-arrow-left), consistente con el resto de iconos ya usados sin FA en este archivo. Alternativa: agregar el CDN de Font Awesome en <head> si el archivo va a usar iconos extensivamente.`;

      console.error(msg);
      process.exit(2);
    }

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
