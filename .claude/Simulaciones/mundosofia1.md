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
