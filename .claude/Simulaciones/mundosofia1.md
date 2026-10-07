# El Mundo de Sofía — El Jardín del Edén

Simulación narrativa e interactiva basada en el primer capítulo (*El Jardín del Edén*) de **El Mundo de Sofía**, de Jostein Gaarder. Introduce al estudiante a la filosofía a través de las preguntas fundacionales que recibe Sofía Amundsen en dos cartas anónimas.

## Estructura narrativa (7 escenas)

1. **Portada** — título y autor, animación de entrada.
2. **El camino** — Sofía vuelve a casa; disyuntiva "cerebro como ordenador" vs. "algo más que una máquina".
3. **El buzón** — interacción de abrir un buzón animado; revela la primera pregunta: *¿Quién eres?*
4. **El espejo** — Sofía se mira al espejo (usa webcam del navegador si está disponible, con fallback visual si se deniega el permiso); el estudiante escribe su propia respuesta a *¿Quién eres?*
5. **El jardín** — moneda 3D interactiva (vida/muerte) que introduce la segunda pregunta: *¿De dónde viene el mundo?*
6. **El callejón sin salida** — animación de círculos concéntricos que ilustra el regreso al infinito del argumento cosmológico.
7. **Los tres enigmas** — cierre reflexivo: los sobres, las preguntas, y la incógnita de Hilde Møller Knag.

## Conceptos filosóficos trabajados

### Identidad personal
- El nombre como convención arbitraria, no como esencia.
- La idea de "no haberse elegido a sí mismo" — contingencia de la existencia.

### Conciencia de la finitud (mortalidad)
- La vida adquiere valor precisamente por ser finita (moneda vida/muerte como metáfora).

### Cosmología y el problema del regreso al infinito
- Todo lo que existe parece requerir una causa previa.
- Si Dios creó el universo, ¿qué creó a Dios? — el problema de la causa incausada.
- Introducción intuitiva (sin tecnicismos) al argumento cosmológico y sus objeciones.

### El asombro filosófico (thaumazein)
- La filosofía nace de la capacidad de sorprenderse ante lo cotidiano.
- Distinción entre quienes han perdido la capacidad de asombro y quienes no.

## Mecánicas interactivas

| Escena | Mecánica | Propósito pedagógico |
|---|---|---|
| Buzón | Clic/Enter para abrir | Revelar la pregunta de forma progresiva, generar expectativa |
| Espejo | Input de texto libre + webcam opcional | Confrontar al estudiante con su propia respuesta a "¿quién eres?" |
| Jardín | Moneda 3D volteable (clic/Enter) | Visualizar vida/muerte como dos caras de una misma realidad |
| Callejón | Animación pasiva (círculos concéntricos) | Representar visualmente el regreso al infinito causal |
| Enigmas | Revelado escalonado + captura de nombre | Cierre personalizado, síntesis de los tres enigmas planteados |

## Nota técnica: uso de webcam

La escena del espejo solicita `getUserMedia` para mostrar el reflejo real del estudiante. Si el usuario deniega el permiso o el navegador no soporta la API, se activa un *fallback* visual (superficie de espejo reactiva al movimiento del ratón) sin interrumpir el flujo narrativo.

## Referencias

- Gaarder, J. (1991). *Sofies verden* [El Mundo de Sofía]. Aschehoug.
- Argumento cosmológico y regreso al infinito: tradición aristotélico-tomista (primer motor inmóvil).

## Guía de clase — preguntas para conversar

Panel flotante dentro de la simulación (botón de comentarios, arriba a la derecha). Al terminar la simulación aparece un aviso discreto que abre la pestaña «Después».

### Español
**Antes**
1. ¿Cuál es la diferencia entre hacerse una pregunta filosófica y buscar un dato?
2. ¿Cuándo fue la última vez que se preguntaron «¿quién soy?» o «¿de dónde viene todo?»
3. ¿Por qué los niños suelen hacer mejores preguntas filosóficas que los adultos?

**Durante**
1. ¿Qué te inquietó más de las preguntas que recibe Sofía y por qué?
2. Si tuvieras que responder tú la pregunta «¿quién eres?», ¿qué responderías sin usar tu nombre ni tu profesión?
3. ¿Qué te sugiere la escena de la moneda sobre la vida y la muerte?
4. ¿Qué te hizo sentir el espejo en la historia: curiosidad, incomodidad, extrañeza?

**Después**
1. ¿Qué diferencia hay entre una respuesta filosófica, una científica y una religiosa a la pregunta por el origen del universo?
2. ¿Es mejor tener una buena pregunta que una respuesta rápida? Argumenten.
3. ¿Qué papel cumple el asombro en el pensamiento filosófico?
4. Formulen en grupo una pregunta filosófica sobre su vida universitaria y debatan dos respuestas posibles.

### English
**Before**
1. What is the difference between asking a philosophical question and looking up a fact?
2. When was the last time you asked yourself «who am I?» or «where does everything come from?»
3. Why do children often ask better philosophical questions than adults?

**During**
1. What unsettled you most about the questions Sophie receives, and why?
2. If you had to answer «who are you?», what would you say without using your name or profession?
3. What does the coin scene suggest to you about life and death?
4. What did the mirror make you feel in the story: curiosity, discomfort, strangeness?

**After**
1. What is the difference between a philosophical, a scientific and a religious answer to the question of the universe's origin?
2. Is it better to have a good question than a quick answer? Argue your case.
3. What role does wonder play in philosophical thinking?
4. As a group, formulate a philosophical question about your university life and debate two possible answers.

