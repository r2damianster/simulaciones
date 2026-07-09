# SimulAI — Alucinaciones en la Investigación

## Marco conceptual

**Objetivo pedagógico:** Capacitar a investigadores y estudiantes de posgrado en la detección de alucinaciones de IA en la operacionalización de constructos teóricos — combinaciones no-existentes de términos válidos o adjetivación espuria.

**Contexto:** Las IA generativas (especialmente en chat-based systems) tienden a:
1. Fusionar conceptos de campos lejanos (ej: "quantum leadership")
2. Añadir adjetivos arbitrarios a constructos reales (ej: "reverse neurolearning")
3. Inventar citas recientes para sonar legitimas
4. Estructurar respuestas con tanta coherencia que parecen académicamente sólidas, cuando en realidad son constructos ficticios

## Tipología de alucinaciones (en la sim)

| Tipo | Mecanismo | Ejemplo | Señal de alerta |
|------|-----------|---------|-----------------|
| **Adjetivación espuria** | Agregar adjetivos arbitrarios a constructo real | "Extended ZDP" (Zona de Desarrollo Proximal válida + "extended" inventado) | Adjetivo moderno/tecno ≈ no aparece en búsquedas indexadas |
| **Fusión cross-field** | Mezclar términos de campos distintos sin justificación teórica | "Quantum transformational leadership" (liderazgo válido + "quantum" buzzword) | Campos muy distantes, sin cita que justifique la fusión |
| **Somatic mixing** | Fusión forzada de subcampos (ej: terapia corporal + metacognición) | "Somatic metacognition" | Términos que no aparecen juntos en literatura; subcampos aislados |
| **Cita fabricada** | Inventar autores/años recientes | "Gonzalez & Martinez (2023)" para un constructo falso | Cita muy reciente; autores genéricos; no aparecen en Scopus |

## Rondas de la simulación (3 áreas temáticas)

### Ronda 1: Educación y Aprendizaje
3 opciones + 1 válida (Autoeficacia académica de Bandura):
- Neuroaprendizaje inverso (falso: adjetivación)
- **Autoeficacia académica** (válido: Bandura 1997, 3847 citas en Scopus)
- Zona de desarrollo proximal extendida (falso: ZDP real + "extended" inventado)
- Metacognición somática (falso: fusión cross-field)

### Ronda 2: Psicología Organizacional
3 opciones + 1 válida (Engagement laboral - Schaufeli & Bakker):
- Burnout inverso proactivo (falso: contradicción adjetival)
- **Engagement laboral** (válido: UWES model, 5621 citas)
- Capital psicológico difuso (falso: PsyCap real + "diffuse" + cita falsa)
- Liderazgo transformacional cuántico (falso: fusión quantum buzzword)

### Ronda 3: Tecnología y Educación
3 opciones + 1 válida (Competencia digital docente - DigCompEdu):
- Competencia algoritmica emocional (falso: mezcla 3 campos)
- Flujo cognitivo distribuido (falso: flow + distributed cognition + fusión arbitraria)
- Hibridación digital pedagógica (falso: "blended learning" real, versión con adjetivos falsos)
- **Competencia digital docente** (válido: Redecker 2017, DigCompEdu, 4215 citas)

## Tips pedagógicos (8 estrategias de verificación)

1. **Author heuristic:** Constructos válidos citan autores reconocidos (Bandura, Maslach, Vygotsky). Sin autor real = alerta.
2. **Quoted search:** Buscar constructo entre comillas en Scopus. 0 resultados = no existe (usualmente).
3. **Cross-field suspicion:** Desconfiar de términos que mezclan campos muy distintos sin justificación teórica.
4. **Adjective abuse:** Las IA agregan adjetivos ("extended", "diffuse", "reverse") para simular novedad. Verificar siempre el término base.
5. **Systematic review check:** Constructos reales aparecen en revisiones sistemáticas y meta-análisis.
6. **Recent citation red flag:** Citas 2023-2024 como "estudios seminales" = sospechoso (real research toma años para ser seminal).
7. **Contradictory adjectives:** Adjetivos mutuamente excluyentes juntos ("proactive reverse") = la IA generando verbosidad.
8. **Multiple authors rule:** Constructos reales tienen múltiples investigadores publicando, revistas reconocidas, cientos de citaciones.

## Interfaz: simulación Chat-in-Browser

La sim simula una sesión de ChatGPT-4o dentro de un navegador estilizado. Usuario:

1. **Onboarding:** ingresa nombre, apellido, género (avatar generado dinámicamente)
2. **Ronda 1-3:** IA propone 4 constructos (1 válido, 3 falsos). Usuario selecciona y cliquea "Verificar en Scopus"
3. **Scopus mock:** búsqueda de `"constructo"` (entre comillas) devuelve:
   - Si **válido:** tabla con 4+ artículos reales (citas indexadas reales)
   - Si **falso:** 0 resultados + explicación del tipo de alucinación + tip pedagógico
4. **Scoring:** ronda perfecta = +0 errores; cada false positive = +1 error en ronda

Final: dashboard con estadísticas (búsquedas, alucinaciones detectadas, perfectas) + lecciones clave + tips acumulados.

## Contenido académico referencial

### Artículos Scopus reales (rama EN incluye citas exactas)

**Ronda 1:**
- Pajares, F. (2019). "Academic self-efficacy and academic performance: A meta-analytic review" — J. Educational Psychology, 245 cites
- Multon, K.D. et al. (2018). "Self-efficacy beliefs and academic success" — Psychological Bulletin, 412 cites
- Villanueva, M.R. et al. (2020). "Academic self-efficacy in engineering students" — Eur. J. Eng. Education
- Chemers, M.M. et al. (2017). "Self-efficacy and academic performance in first-year students" — J. Educational Psychology

**Ronda 2:**
- Rich, B.L. et al. (2010). "Work engagement: A quantitative review..." — Personnel Psychology, 1892 cites
- Schaufeli, W.B. & Salanova, M. (2007). "Measurement of engagement and burnout" — J. Happiness Studies, 3567 cites
- Anitha, J. (2014). "Employee engagement and customer satisfaction: A meta-analysis" — Int. J. Business & Management, 423 cites
- Bakker, A.B. & Demerouti, E. (2018). "Work engagement and performance: A meta-analytic review" — Curr. Directions Psych. Science, 876 cites

**Ronda 3:**
- Redecker, C. (2017). "Teachers' digital competence: Overview of DigCompEdu" — Eur. J. Education, 1876 cites
- Cabero-Almenara, J. et al. (2020). "Digital competence in higher education research" — Comunicar, 534 cites
- Siddiq, F. et al. (2022). "Teacher digital competence framework: Comprehensive review" — Teaching & Teacher Education, 289 cites
- Ghomi, M. & Redecker, C. (2019). "Digital competence of educators" — Eur. J. Education, 643 cites

## Reglas i18n

Bilingüe ES/EN obligatorio. La rama EN es **adaptación pedagógica**, no traducción literal:
- Constructos falsos EN son plausibles en inglés (ej: "Reverse neurolearning" suena científico en ambas lenguas)
- Artículos Scopus ES se adaptan a publicaciones reales en inglés (los autores son los mismos, ajustes mínimos)
- Tips EN mantienen estructura pero idioma natural
- UI común desde `terminos_es_en.json`

## Checklist post-incorporación

- [x] Back-link `.sim-home` fixed top-left
- [x] Variables CSS `--sim-home-*` en `:root` (verde AI #10a37f)
- [x] Meta description + favicon
- [x] localStorage.setItem('simlab_done_simlab_constructos_ia') en showFinal()
- [x] i18n bilingüe con ramas ROUNDS_ALL y TIPS_ALL
- [x] Toggle lang `.sim-lang` top-right con confirm + reload
- [x] Tarjeta en index.html (data-cat, data-key, data-file, CSS `.ia`)
- [x] Entrada en CLAUDE.md (tabla + paleta + localStorage)
- [x] BD i18n central (terminos_es_en.json) poblada con términos de esta sim

## Próximos pasos (iteración rápida)

1. Verificar en navegador: intro → onboarding → 3 rondas → final
2. Toggle EN completo: todos los strings dinámicos
3. Scopus mock con búsquedas reales (actualmente devuelve mock; puede conectarse a API real si es necesario)
4. Badge ✓ Completada en index.html aparece después de simular
5. Back-link funcional
