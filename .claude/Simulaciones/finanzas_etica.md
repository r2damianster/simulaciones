# El Dilema del Investigador — `financiamiento_etica.html`

Serious game de **ética académica para personas sin formación en investigación**. Rediseño completo (2026-11): de «caminar por un mapa con relojes» a **tres decisiones con consecuencias visibles y explicadas**.

## Principio rector
- **Un dilema solo es dilema si no viene etiquetado.** Los botones de las cartas no dicen «bueno/malo», su orden es aleatorio y el sello es neutro («DECIDIDO»). El estudiante descubre por qué algo es una trampa.
- **Consecuencias visibles:** cada decisión mueve tres medidores (**Fondos, Tiempo en meses, Reputación**) y una tarjeta explica cada cambio.
- **Riesgo ≠ permiso:** la detección tiene probabilidad explícita (dado visible). Si no te detectan, el texto aclara que el plagio/fraude sigue siéndolo y el final deja una «deuda ética».
- **Dicho fácil → dicho técnico:** «que expertos revisen tu trabajo sin saber quién eres» → *revisión por pares*. Glosario de 12 términos que se va llenando.
- **Se elimina** la motricidad sin valor pedagógico: ya no hay zona lenta, reloj en tiempo real ni «quédate 3 s en el cuadro». El tiempo es un calendario de 11 meses.

## Flujo
| Capítulo | Qué pasa | Aprendizaje |
|---|---|---|
| 0. La pregunta | «¿Cómo decides si algo en internet es confiable?» → puente hacia la revisión por pares | Para qué existe la revisión por pares |
| 1. Fondos (Convocatoria ONU) | Carta del «consultor académico» que escribe tu propuesta (15% de comisión). Aceptar: dado 50% de que el antiplagio lo detecte (−20 reputación, reescribir). Rechazar: +5 reputación, más tiempo | Autoría y plagio |
| 2. Datos (Laboratorio) | p = 0.08 explicado como «8% de casualidad». El asistente propone quitar 3 datos. Honesto: resultado nulo (+10 rep., −1.5 meses). Manipular: parece mejor, pero queda deuda | Valor p, resultado nulo, manipulación de datos |
| 3. Publicar (Revistas A y B) | **Detective de señales:** ficha de cada revista con 6 ítems que el estudiante abre uno a uno (🚩 / ✓). A: revisión por pares (−3 meses), pedido de datos crudos (si manipulaste: dado 70% de ser descubierto), «correcciones mayores» y elección entre corregir o buscar un atajo. B: $900 por adelantado, publicado en 48 h, auditoría de la ONU | Reconocer revistas depredadoras, resiliencia ante un «todavía no», mal uso de fondos |

### Finales
`legit` (publicado en A) · `predatory` (publicado en B, sanción −50) · `fraudCaught` (revisores descubren los datos manipulados, −45). Pantalla final: reputación 0-100, **tus decisiones y lo que significaron**, y las 6 señales de alerta de una revista depredadora.

### Balance
Tiempo inicial 11 meses; ruta honesta completa consume 9.5 (margen 1.5). Reputación inicial 50: honesta = 100 (5 + 10 + 35).

## Corrección respecto a la versión anterior
- Antes: el fraude de datos **sumaba +15 prestigio** sin ser detectado nunca y se podía «ganar» defraudando; el plagio no tenía consecuencia. Ahora ambos tienen riesgo y consecuencia explicada.
- Antes: «Q1», «Peer Review», «p-valor .08→.03», «rendición de cuentas» sin explicar. Ahora van en lenguaje cotidiano primero.
- Antes: los botones («Aceptar atajo» / «Redactar yo mismo») y las instrucciones («FAST PUBLISH riesgoso») ya revelaban la respuesta.

## Arquitectura técnica
- Un solo archivo HTML + Vanilla JS (sin canvas ni three.js). Mapa de 4 habitaciones clicables (`travelToRoom()`); el investigador se desplaza solo.
- Guion imperativo con `async/await`: `chapterHook()`, `chapterFunding()`, `chapterData()`, `chapterPublish()`; ayudantes `say()`, `addDialog()`, `addButton()`, `showLetter()`, `showJournalFile()`, `showConsequences()`, `rollDetection()`, `endGame()`.
- Bilingüe ES/EN: `TEXT_ALL` (misma forma), `TERMS_ALL`, `I18N`. Términos en `i18n/terminos_es_en.json` (`"sims": ["financiamiento_etica"]`).
- Final: `localStorage['simlab_done_simlab_fin']` + `obtenerNombreUsuario()`.

## Guía de clase — preguntas para conversar

### Español
**Antes**
1. Cuando buscas información en internet, ¿qué te hace confiar en una fuente y no en otra? ¿Cómo se aplicaría eso a un artículo científico?
2. ¿Por qué crees que alguien aceptaría pagar para publicar rápido, aun sospechando que quizá no sea una revista seria?
3. ¿Qué presiones (tiempo, dinero, competencia) puede sentir un estudiante o docente para publicar? ¿Cuáles has sentido tú?

**Durante**
1. ¿Qué señales de alerta encontraste en cada revista? ¿Cuál te pareció más difícil de notar?
2. Cuando el consultor ofreció escribir tu propuesta, ¿qué te hizo dudar o aceptar? ¿Dónde está la línea entre ayuda legítima y plagio?
3. Quitar 3 datos «raros» puede parecer un detalle técnico. ¿Cuándo es legítimo excluir un dato atípico y cuándo es manipulación?
4. Tras el rechazo con correcciones, ¿qué sentiste? ¿Qué diferencia hay entre un «no» y un «todavía no»?

**Después**
1. ¿Qué consecuencias tiene para la ciencia que las revistas depredadoras publiquen cualquier cosa? ¿Y para quien las usa?
2. Si un resultado no es significativo, ¿vale la pena publicarlo? ¿Qué se pierde cuando solo se publican resultados «exitosos»?
3. Un colega te dice «a mí me publicaron ayer». ¿Cómo responderías sin romper la relación y sin dejarte presionar?
4. Escriban una lista breve de 5 pasos que revisarían antes de enviar un artículo a una revista que no conocen.

### English
**Before**
1. When you look for information online, what makes you trust one source and not another? How would that apply to a scientific article?
2. Why do you think someone would pay to publish fast, even suspecting it may not be a serious journal?
3. What pressures (time, money, competition) can a student or teacher feel to publish? Which have you felt?

**During**
1. What warning signs did you find in each journal? Which one was hardest to notice?
2. When the consultant offered to write your proposal, what made you hesitate or accept? Where is the line between legitimate help and plagiarism?
3. Removing 3 «odd» data points may seem like a technical detail. When is it legitimate to exclude an outlier and when is it manipulation?
4. After the rejection with corrections, how did you feel? What is the difference between a «no» and a «not yet»?

**After**
1. What are the consequences for science when predatory journals publish anything? And for those who use them?
2. If a result is not significant, is it worth publishing? What is lost when only «successful» results are published?
3. A colleague tells you «they published me yesterday». How would you answer without hurting the relationship and without giving in to pressure?
4. Write a short 5-step checklist you would apply before sending an article to a journal you do not know.
