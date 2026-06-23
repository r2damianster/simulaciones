#!/usr/bin/env node
// check-sim-link — PostToolUse hook (Write)
// Cuando se crea un nuevo archivo .html de simulacion en la raiz del proyecto,
// recuerda a Claude: 1) enlazarlo en index.html (sim-grid + tabla CLAUDE.md)
// 2) agregar boton "volver al inicio" (href="index.html") dentro del propio archivo.
// 3) incluir funcion obtenerNombreUsuario() para pedir nombre antes de resultados finales.

const fs = require('fs');
const path = require('path');

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', c => { raw += c; });
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(raw || '{}');
    if (data.tool_name !== 'Write') process.exit(0);

    const filePath = (data.tool_input && data.tool_input.file_path) || '';
    if (!filePath.toLowerCase().endsWith('.html')) process.exit(0);

    const cwd = data.cwd || process.cwd();
    const fileName = path.basename(filePath);
    const fileDir = path.dirname(filePath);

    // Solo simulaciones nuevas en la raiz del proyecto, no index.html
    if (fileName.toLowerCase() === 'index.html') process.exit(0);
    if (path.resolve(fileDir) !== path.resolve(cwd)) process.exit(0);

    const issues = [];

    // 1) Verificar enlace en index.html
    const indexPath = path.join(cwd, 'index.html');
    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, 'utf8');
      if (!indexContent.includes(fileName)) {
        issues.push(`- "${fileName}" no esta enlazado en index.html (agrega tarjeta en #simulaciones, sim-grid).`);
      }
    }

    // 2) Verificar boton "volver al inicio" en el nuevo archivo
    const fileContent = (data.tool_input && data.tool_input.content) || (fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '');
    if (!/href=["']index\.html["']/i.test(fileContent)) {
      issues.push(`- "${fileName}" no tiene boton/enlace "volver al inicio" (href="index.html").`);
    }

    // 3) Verificar patron obtenerNombreUsuario (nombre en pantalla final)
    if (!fileContent.includes('obtenerNombreUsuario')) {
      issues.push(`- "${fileName}" no tiene obtenerNombreUsuario() — agregar para pedir nombre antes de mostrar resultados finales (ver peel.html como referencia).`);
    }

    // 4) Verificar fila en CLAUDE.md
    const claudeMdPath = path.join(cwd, 'CLAUDE.md');
    if (fs.existsSync(claudeMdPath)) {
      const claudeMd = fs.readFileSync(claudeMdPath, 'utf8');
      if (!claudeMd.includes(fileName)) {
        issues.push(`- "${fileName}" no esta listado en la tabla de "Simulaciones activas" de CLAUDE.md.`);
      }
    }

    if (issues.length > 0) {
      console.error('Nueva simulacion detectada — pendientes antes de terminar:\n' + issues.join('\n'));
      process.exit(2);
    }

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
