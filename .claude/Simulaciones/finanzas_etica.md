
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