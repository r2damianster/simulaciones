
***

# Documentación del Proyecto: El Dilema del Investigador 2.0

Este documento proporciona una visión técnica y conceptual del código fuente para facilitar su mantenimiento y comprensión por parte de sistemas de IA.

## 1. Propósito del Programa
**El Dilema del Investigador 2.0** es una simulación interactiva basada en la web (Serious Game) diseñada para enseñar a estudiantes e investigadores sobre la ética académica, la gestión de fondos de investigación (ONU/CEDIA) y los peligros de las **revistas depredadoras**.

El jugador debe tomar decisiones bajo presión de tiempo y presupuesto, enfrentando las consecuencias de elegir el camino ético (Revista A) o el camino fácil pero fraudulento (Revista B).

## 2. Arquitectura Técnica
El programa es una aplicación de una sola página (SPA) construida con tecnologías web estándar:
* **HTML5**: Estructura de la interfaz y contenedores de juego.
* **CSS3**: Diseño responsivo, variables de color (`:root`) para identidad visual y animaciones de UI.
* **JavaScript (Vanilla)**: Motor de estados, lógica de juego, sistema de temporizador y manipulación del DOM.

## 3. Lógica del Motor de Juego

### El Objeto de Estado (`state`)
La variable global `state` rastrea el progreso del jugador:
```javascript
let state = {
    phase: 1,           // Fase actual (1: Propuesta, 2: Lab, 3: Publicación)
    credits: 0,         // Moneda del juego (fondos de investigación)
    prestige: 0,        // Puntuación principal
    timerSeconds: 60,   // Tiempo restante en Fase 1
    choseRevistaB: false // Flag crítico de decisión ética
    // ... otros flags de control
};
```

### Fases de la Simulación
1.  **Fase 1: Convocatoria (Presión):** El jugador debe enviar una propuesta sobre temas específicos antes de que el tiempo se agote. Si falla, los temas cambian (simulando la volatilidad de los fondos).
2.  **Fase 2: Laboratorio y Ética:** Se introducen los fondos. El jugador es tentado por la "Revista B" para publicar rápido a cambio de dinero. Una **Auditoría Sorpresa** evalúa si los fondos se han desviado.
3.  **Fase 3: Publicación y Resiliencia:** El jugador intenta publicar en la Revista A (Q1). Se simula el rechazo inicial para probar la resiliencia académica.

## 4. Componentes de Interfaz (UI)
* **HUD (Heads-Up Display):** Barra superior que muestra Créditos, Prestigio y la Fase actual en tiempo real.
* **Área de Diálogo:** Sistema de "logs" dinámico que añade burbujas de texto diferenciadas por colores (ONU = Azul, Revista A = Verde, Revista B = Naranja).
* **Área de Acciones:** Generación dinámica de botones basada en el contexto del estado actual.

## 5. Reglas de Puntuación (Game Design)
| Acción | Impacto en Prestigio | Impacto en Créditos |
| :--- | :--- | :--- |
| Aprobar Propuesta | 0 | +3 |
| Caer en Revista B | +10 (al final) | -2 |
| Sanción por Auditoría | -50 | 0 |
| Resiliencia (Reintento A) | +20 | 0 |
| Publicación Q1 Exitosa | +100 | 0 |

## 6. Notas para la IA de Desarrollo
* **Extensibilidad:** Para añadir más fases, se deben crear funciones `startPhaseX` y añadir las condiciones en la función `endGame`.
* **Probabilidades:** El éxito de la propuesta inicial tiene un factor de aleatoriedad del 80% (`Math.random() > 0.2`).
* **Seguridad de Estado:** El juego no persiste datos (localStorage), un refresco de página reinicia el progreso.

***

> **Instrucción para Claude:** Al analizar este código, enfócate en la lógica de transiciones entre funciones `addDialog` y `addButton`, ya que estas controlan el flujo narrativo y la experiencia del usuario.

## Guía de clase — preguntas para conversar

Panel flotante dentro de la simulación (botón de comentarios, arriba a la derecha). Al terminar la simulación aparece un aviso discreto que abre la pestaña «Después».

### Español
**Antes**
1. ¿Qué diferencia a un experimento de una simple observación? ¿Qué debe hacer el investigador que en la observación no hace?
2. ¿Por qué no siempre podemos asignar personas al azar a un tratamiento? Den ejemplos de su área donde sea imposible o poco ético.
3. ¿Qué significa que un estudio tenga «validez interna»? ¿Qué cosas podrían hacernos creer que un tratamiento funcionó cuando no fue así?

**Durante**
1. ¿Qué otra explicación, además del tratamiento, podría haber producido el cambio que observas en BRAIN y PINKY?
2. En el preexperimento, ¿qué te falta para saber qué habría pasado sin el tratamiento?
3. En el cuasiexperimento, ¿qué ganó el diseño al añadir un grupo de comparación? ¿Qué sigue sin estar garantizado?
4. Si los grupos ya eran distintos antes del tratamiento, ¿cómo cambia la interpretación de la diferencia final?

**Después**
1. ¿Qué hace la asignación aleatoria que ningún otro control puede hacer por sí solo?
2. ¿Es el cuasiexperimento un «experimento de segunda clase»? Argumenten a favor y en contra.
3. Una autoridad aplica un programa en escuelas voluntarias y lo compara con las no voluntarias. ¿Qué diseño es, qué amenazas tiene y cómo las corregirían?
4. Describan una investigación de su carrera donde solo sería viable un cuasiexperimento. ¿Qué precauciones tomarían para sostener sus conclusiones?

### English
**Before**
1. What sets an experiment apart from plain observation? What must the researcher do that observation does not require?
2. Why can we not always assign people to a treatment at random? Give examples from your field where it is impossible or unethical.
3. What does it mean for a study to have «internal validity»? What could make us believe a treatment worked when it did not?

**During**
1. Besides the treatment, what other explanation could have produced the change you see in BRAIN and PINKY?
2. In the pre-experiment, what is missing to know what would have happened without the treatment?
3. In the quasi-experiment, what did the design gain by adding a comparison group? What is still not guaranteed?
4. If the groups already differed before the treatment, how does that change the way you read the final difference?

**After**
1. What does random assignment do that no other control can do on its own?
2. Is the quasi-experiment a «second-class experiment»? Argue for and against.
3. An authority runs a program in volunteer schools and compares it with non-volunteer ones. Which design is this, what threats does it carry and how would you correct them?
4. Describe a study from your degree where only a quasi-experiment would be feasible. What precautions would you take to support your conclusions?

