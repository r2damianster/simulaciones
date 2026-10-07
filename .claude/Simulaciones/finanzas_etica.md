
---

# 📝 Análisis del Proyecto: El Dilema del Investigador 2.0

El código es un archivo único (Single Page Application) que combina HTML5, CSS3 y JavaScript puro (Vanilla JS).

## 1. Estructura General (HTML)
El HTML define tres áreas principales:
* **HUD (Heads-Up Display):** Una barra superior que muestra en tiempo real los recursos del jugador: *Créditos*, *Prestigio* y la *Fase* actual.
* **Pantalla de Juego (`#screen`):** Contiene el área de diálogos (donde aparece la historia) y el área de acciones (donde aparecen los botones).
* **Modal Final (`#final-modal`):** Una pantalla oculta que solo se muestra al terminar el juego para dar el veredicto y el puntaje.

## 2. Estilo y Diseño (CSS)
El diseño utiliza **Variables CSS** (`:root`) para gestionar una paleta de colores profesional.
* **Identidad Visual:** Usa azul para la ONU (institucional), verde para la Revista A (calidad/ética) y naranja para la Revista B (alerta/riesgo).
* **Layout:** Utiliza `flexbox` para centrar el juego en la pantalla y para crear un diseño responsivo que se adapta a diferentes tamaños de ventana.
* **Componentes:** Los "cuadros de diálogo" (`.dialog-box`) tienen bordes laterales de colores para que el usuario identifique rápidamente quién está hablando.

## 3. Lógica del Juego (JavaScript)

El corazón de la simulación se divide en el control de **Estado** y las **Fases**.

### A. El Estado (`state`)
Es un objeto que rastrea todo lo que sucede:
```javascript
let state = {
    phase: 1,
    credits: 0,
    prestige: 0,
    // ... banderas de decisión como choseRevistaB o sanctioned
};
```

### B. Flujo de Fases
El juego progresa a través de tres etapas críticas:

1.  **Fase 1 (La Convocatoria):**
    * Introduce un **Temporizador** (`setInterval`). Si el jugador no envía la propuesta a tiempo, los temas cambian, simulando la presión real de los *deadlines* académicos.
    * Otorga los primeros créditos (el presupuesto) si la propuesta es aprobada.

2.  **Fase 2 (El Laboratorio y la Tentación):**
    * Presenta un dilema ético: seguir el camino lento y honesto o contactar a la **Revista B**.
    * Si el jugador paga a la Revista B, se activa una **Auditoría** que resta prestigio (-50), simulando una sanción por malversación de fondos.

3.  **Fase 3 (La Publicación):**
    * **Revista A (Q1):** Representa el éxito académico real. Requiere superar un rechazo inicial (resiliencia) y una entrevista de ética.
    * **Revista B (Depredadora):** Ofrece publicación rápida a cambio de dinero, pero al final se revela que no tiene valor académico.

### C. Mecánicas Especiales
* **Sistema de Diálogos Dinámico:** La función `addDialog` crea elementos HTML al vuelo y hace *auto-scroll* para que el jugador siempre vea el último mensaje.
* **Entrevista Ética:** En la fase final, el prestigio varía dependiendo de la respuesta del jugador, evaluando si prioriza el rigor científico o la conveniencia económica.

---

## 4. Resumen de Reglas y Consecuencias

| Acción | Consecuencia |
| :--- | :--- |
| **Publicar en Revista A** | +100 Prestigio (Éxito máximo). |
| **Corregir tras rechazo** | +20 Prestigio (Resiliencia). |
| **Pagar a Revista B** | -2 Créditos y riesgo de Sanción (-50 Prestigio). |
| **Fallar entrevista ética** | +50 Prestigio (Puntaje parcial, éxito manchado). |

## 5. Conclusión de la Experiencia
El código no es solo un juego, sino una **herramienta pedagógica**. Al final, el `endGame` muestra una "Revelación" que explica la naturaleza de las revistas depredadoras, reforzando el aprendizaje sobre la integridad científica.

## Guía de clase — preguntas para conversar

Panel flotante dentro de la simulación (botón de comentarios, arriba a la derecha). Al terminar la simulación aparece un aviso discreto que abre la pestaña «Después».

### Español
**Antes**
1. ¿Qué señales hacen sospechar que una revista es depredadora? ¿Cuál es la más difícil de detectar?
2. ¿Por qué un investigador con presión por publicar puede caer en prácticas éticamente dudosas aun sin mala intención?
3. ¿Qué debería exigirse a quien administra fondos de investigación de un organismo externo?

**Durante**
1. ¿Qué criterio usaste para decidir y qué información te habría gustado tener antes de elegir?
2. ¿Qué costo de corto plazo aceptaste para evitar un daño de largo plazo (o al revés)?
3. ¿Cómo cambia tu decisión si el plazo del financiamiento está por vencer?
4. ¿A quién afecta tu decisión además de ti: coautores, estudiantes, la institución, los participantes?

**Después**
1. ¿Dónde termina la presión institucional y empieza la responsabilidad individual del investigador?
2. ¿Qué políticas de una universidad reducirían la tentación de publicar en revistas depredadoras?
3. ¿Qué diferencia hay entre un error de gestión de fondos y una conducta antiética? ¿Cómo se distingue en la práctica?
4. Redacten un breve código de conducta de 5 puntos para un equipo que administra fondos externos. ¿Qué punto sería el más difícil de cumplir?

### English
**Before**
1. Which signs make you suspect a journal is predatory? Which one is hardest to detect?
2. Why can a researcher under pressure to publish fall into ethically doubtful practices even without bad intent?
3. What should be required of someone who manages research funds from an external body?

**During**
1. What criterion did you use to decide, and what information would you have liked before choosing?
2. What short-term cost did you accept to avoid a long-term harm (or the other way around)?
3. How does your decision change when the funding deadline is about to expire?
4. Besides you, who is affected by your decision: co-authors, students, the institution, participants?

**After**
1. Where does institutional pressure end and individual responsibility begin?
2. Which university policies would reduce the temptation to publish in predatory journals?
3. What is the difference between a fund-management mistake and unethical conduct? How do you tell them apart in practice?
4. Write a short 5-point code of conduct for a team that manages external funds. Which point would be the hardest to keep?

