/* teacher-mode.js — Modo Profesor compartido para simulaciones ULEAM
 * Boton flotante que pide clave ("profearturito") y revela bloques
 * marcados con [data-teacher-only] (paneles de soluciones/respuestas).
 * Persistencia: localStorage (clave "profeArturitoMode").
 */
(function () {
  var STORAGE_KEY = 'profeArturitoMode';
  var PASSWORD = 'profearturito';

  var style = document.createElement('style');
  style.textContent = [
    '[data-teacher-only]{display:none;}',
    'body.teacher-mode [data-teacher-only]{display:block;}',
    'body.teacher-mode [data-teacher-only][data-teacher-display]{display:var(--tm-display);}',
    '#teacherModeBtn{position:fixed;bottom:18px;right:18px;z-index:99999;',
    'width:46px;height:46px;border-radius:50%;border:none;cursor:pointer;',
    'background:#1f2937;color:#fbbf24;font-size:20px;display:flex;',
    'align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.35);',
    'transition:transform .15s ease,background .2s ease;}',
    '#teacherModeBtn:hover{transform:scale(1.08);}',
    'body.teacher-mode #teacherModeBtn{background:#15803d;color:#fff;}'
  ].join('');
  document.head.appendChild(style);

  // [data-teacher-display="flex"] -> usa display:flex al revelar
  document.querySelectorAll('[data-teacher-only][data-teacher-display]').forEach(function (el) {
    el.style.setProperty('--tm-display', el.getAttribute('data-teacher-display'));
  });

  function setUnlocked(on) {
    document.body.classList.toggle('teacher-mode', on);
    btn.textContent = on ? '🔓' : '🔒';
    btn.title = on
      ? 'Modo Profesor activo (clic para ocultar soluciones)'
      : 'Modo Profesor (clic para ingresar clave)';
    if (on) localStorage.setItem(STORAGE_KEY, '1');
    else localStorage.removeItem(STORAGE_KEY);
    document.dispatchEvent(new CustomEvent('teacherModeChange', { detail: { unlocked: on } }));
  }

  var btn = document.createElement('button');
  btn.id = 'teacherModeBtn';
  btn.type = 'button';
  document.body.appendChild(btn);

  var unlocked = localStorage.getItem(STORAGE_KEY) === '1';
  setUnlocked(unlocked);

  btn.addEventListener('click', function () {
    if (document.body.classList.contains('teacher-mode')) {
      setUnlocked(false);
      return;
    }
    var input = window.prompt('Modo Profesor — ingresa la clave:');
    if (input === null) return;
    if (input.trim().toLowerCase() === PASSWORD) {
      setUnlocked(true);
    } else {
      window.alert('Clave incorrecta.');
    }
  });
})();
