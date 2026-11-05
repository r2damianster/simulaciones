# Laboratorio ACME — `disenos.html`

Serious game sobre **diseños de investigación** para personas sin formación metodológica. Rediseño completo (2026-11): de «tres tratamientos en consola» a **una receta con ingredientes que se van quitando**.

## Principio rector

- **Una pregunta, un tratamiento, una medida** en toda la simulación: *¿el Superalimento ACME vuelve más listos a los ratones?* Medida: segundos para salir de un laberinto (menos = más hábil). Así los tres diseños son comparables.
- **De lo sólido a lo débil:** experimento → cuasiexperimento → pre-experimento. Se parte de la «receta completa» y se quita un ingrediente por fase para descubrir qué se rompe.
- **Dicho fácil → dicho técnico:** cada paso se explica en lenguaje cotidiano (lo que comen, beben, el sorteo) y *después* aparece el término (chip «Dicho técnico»), que se acumula en el glosario «Palabras que ya conoces» (12 términos).
- **Predecir antes de revelar:** preguntas con retroalimentación por opción (las incorrectas se tachan y se puede reintentar).

## Flujo (5 fases, desbloqueo secuencial)

| Fase | Contenido | Ingredientes que se encienden |
|---|---|---|
| 0. La pregunta | Gancho con experiencia cotidiana («sentí que me funcionó»); 3 respuestas intuitivas, todas válidas con feedback | — |
| 1. Experimento | 40 clones → medir antes → **sorteo** (animación de bolsa) → comida distinta → **todo lo demás igual** (checklist interactivo: sala, agua, comida base, luz/sueño, cuidador) → evaluador ciego → medir después → «¿por qué mejoró A?» | los 5 + inferencia causal «Sí» |
| 2. Cuasiexperimento | Solo Brain y Pinky (grupos que ya existen). Parten distintos (30 s vs 75 s). Brain mejora 10 s, Pinky 3 s. ¿Comida o ya era más hábil? → variable confusa | sin sorteo, control parcial, causal «Quizá» |
| 3. Pre-experimento | Solo Brain (Pinky desaparece). 18 s sin antes ni comparación. Barras fantasma «?» | todos «No», causal «No» |
| 4. Tú decides | 4 casos cotidianos (influencer, colegio 5.º A/B, universidad con sorteo, hospital con elección propia), mapa de diseños y pantalla final con nombre | — |

### Los 5 ingredientes (tablero fijo)
1. Un grupo con quien comparar — *grupo control*
2. Medir antes y después — *pre-test y post-test*
3. Sorteo de quién va a cada grupo — *asignación aleatoria*
4. Todo lo demás, igual — *control de variables extrañas / validez interna*
5. Quien mide no sabe quién comió qué — *evaluador ciego* (con personas: doble ciego)

### Datos (idénticos en ES y EN)
- Experimento: A 52.3 → 34.1 s (−18.2); B 51.8 → 49.7 s (−2.1; efecto de práctica). p < 0.01 solo como nota «para curiosos».
- Cuasi: Brain 30 → 20 s; Pinky 75 → 72 s.
- Pre: Brain 18 s.

## Correcciones conceptuales respecto a la versión anterior
- «Doble ciego» con ratones era incorrecto: un ratón no puede estar «ciego»; se habla de **evaluador ciego** (doble ciego aplica a personas).
- Se eliminaron el rayo y el suero: un solo tratamiento (superalimento) en los tres diseños.
- Se eliminaron CI=245, test 0-100 y logs de consola: una sola escala (segundos).

## Arquitectura técnica
- Un solo archivo HTML + Vanilla JS + three.js (CDN, importmap). Sin Tailwind.
- `PHASE_FLOW` (estructura independiente del idioma: tipo de paso, cue 3D, ingredientes que se encienden, términos) + `TEXT_ALL` (`es`/`en`, misma forma) + `TERMS_ALL` + `CHARTS`.
- Pasos: `say`, `action` (botón que dispara la animación), `choice`, `checklist`, `case`, `finale`. Patrón del proyecto: `startPhase()`, `addDialog()`, `addButton()`.
- Escena 3D controlada por *cues* (`window.lab3D.cue(nombre)`): `empty`, `clones`, `maze`, `draw`, `feed`, `equalize`, `quasi_enter`, `quasi_feed`, `pre_enter` y estados instantáneos `prev_pure` / `prev_quasi` (al reentrar a una fase). Si three.js no carga, la simulación funciona solo con texto.
- Final: `localStorage['simlab_done_simlab_des']` + `obtenerNombreUsuario()` + matriz comparativa.
- Bilingüe ES/EN con el patrón canónico; términos registrados en `i18n/terminos_es_en.json` (`"sims": ["disenos"]`).

## Guía de clase — preguntas para conversar

Panel lateral (pestaña derecha). Al terminar aparece un aviso que abre la pestaña «Después».

### Español
**Antes**
1. Piensa en algo que empezaste a hacer (una dieta, una técnica de estudio) y que sentiste que te funcionó. ¿Cómo sabrías de verdad que fue por eso?
2. Si quisieras saber si una app de estudio realmente funciona, ¿con quién compararías a sus usuarios? ¿Qué tendría que ser igual en ambos grupos?
3. ¿Por qué no siempre se puede sortear a las personas para que reciban o no un tratamiento? Den ejemplos de su carrera.

**Durante**
1. En el experimento, ¿qué ingrediente de la receta te parece más fácil de olvidar? ¿Qué pasaría si se olvidara?
2. ¿Por qué el sorteo hace que los grupos partan parejos? ¿Qué habría pasado si cada ratón hubiera elegido su propio grupo?
3. En el cuasiexperimento, ¿qué otra explicación, además de la comida, pudo producir la mejora de Brain?
4. En el pre-experimento, ¿qué datos te faltan para saber si el Superalimento sirvió?

**Después**
1. ¿Es el cuasiexperimento un «experimento de segunda clase»? Argumenten a favor y en contra.
2. Una autoridad aplica un programa en escuelas voluntarias y lo compara con las que no se ofrecieron. ¿Qué diseño es, qué amenazas tiene y cómo las corregirían?
3. Describan un estudio de su carrera donde solo sería viable un cuasiexperimento. ¿Qué precauciones tomarían para sostener sus conclusiones?
4. ¿Qué conclusiones se pueden sacar de un pre-experimento y cuáles no? ¿Para qué serviría igual?

### English
**Before**
1. Think of something you started doing (a diet, a study technique) that you felt worked. How could you really know it was because of that?
2. If you wanted to know whether a study app really works, who would you compare its users with? What would have to be equal in both groups?
3. Why can people not always be drawn at random to receive a treatment or not? Give examples from your field.

**During**
1. In the experiment, which ingredient of the recipe do you think is easiest to forget? What would happen if it were forgotten?
2. Why does the draw make the groups start out alike? What would have happened if each mouse had picked its own group?
3. In the quasi-experiment, what other explanation, besides the food, could have produced Brain's improvement?
4. In the pre-experiment, what data are you missing to know whether the Superfood worked?

**After**
1. Is the quasi-experiment a «second-class experiment»? Argue for and against.
2. An authority runs a program in volunteer schools and compares it with schools that did not volunteer. Which design is this, what threats does it carry and how would you correct them?
3. Describe a study from your degree where only a quasi-experiment would be feasible. What precautions would you take to support your conclusions?
4. What conclusions can be drawn from a pre-experiment, and which cannot? What is it still useful for?
