# Simulador de Muestreos — Estadística

Referencia sobre técnicas de muestreo probabilístico y no probabilístico para recolección de datos en investigación.

## Muestreo Probabilístico

Todos los elementos de la población tienen una probabilidad conocida y no nula de ser seleccionados.

| Técnica | Característica | Ventaja |
|---|---|---|
| **Aleatorio Simple** | Cada elemento tiene igual probabilidad de selección (ej. rifar números del 1 a N). | Minimiza sesgos; ideal para poblaciones homogéneas. |
| **Estratificado** | Se divide la población en subgrupos (estratos) y se muestrea dentro de cada uno. | Asegura representación de subgrupos importantes. |
| **Sistemático** | Se elige cada k-ésimo elemento en una lista ordenada. | Eficiente administrativamente; válido si no hay patrón cíclico. |
| **Por conglomerados** | Se divide la población en clusters y se seleccionan clusters completos. | Económico en poblaciones dispersas geográficamente. |

## Muestreo No Probabilístico

La selección no es aleatoria; depende del criterio del investigador. Introduce sesgos pero es práctico en poblaciones inaccesibles.

| Técnica | Descripción | Limitación |
|---|---|---|
| **Por conveniencia** | Se seleccionan elementos fácilmente accesibles. | Alto sesgo de selección. |
| **Por cuota** | Se asegura una proporción de características (ej. 50% hombres, 50% mujeres). | No garantiza representatividad estadística. |
| **Intencional/Propositivo** | El investigador elige casos "típicos" o "atípicos" intencionalmente. | Válido en investigación cualitativa. |
| **Bola de nieve** | Participantes reclutan a otros (común en estudios de poblaciones ocultas). | Sesgado hacia redes de relación. |
| **Casos Extremos** | Se eligen deliberadamente los casos con máximo y mínimo desempeño, descartando promedios. | Maximiza diferencias; requiere población claramente estratificable. |

## Error de Muestreo

**Error = |Parámetro poblacional - Estadístico muestral|**

Reducción mediante:
- Aumentar el tamaño de muestra (n).
- Usar muestreo estratificado si la población es heterogénea.
- Asegurar aleatorización verdadera.

## Guía de clase — preguntas para conversar

Panel flotante dentro de la simulación (botón de comentarios, arriba a la derecha). Al terminar la simulación aparece un aviso discreto que abre la pestaña «Después».

### Español
**Antes**
1. ¿Por qué casi nunca estudiamos a toda la población? ¿Qué se arriesga al estudiar solo una parte?
2. ¿Qué significa que una muestra sea «representativa»?
3. ¿Qué diferencia hay entre una muestra probabilística y una no probabilística?

**Durante**
1. ¿Qué técnica elegiste y qué te hizo pensar que era la adecuada para esa población?
2. ¿Qué ocurrió con tus estimaciones al repetir el muestreo? ¿Qué te dice eso sobre la variabilidad?
3. ¿Qué grupo de la población quedó menos representado en tu muestra y por qué?
4. ¿Cómo cambió el resultado al aumentar el tamaño de la muestra? ¿Siempre vale la pena aumentarlo?

**Después**
1. ¿Cuándo es justificable una técnica no probabilística? ¿Qué se sacrifica al usarla?
2. ¿Qué diferencia hay entre error de muestreo y sesgo de selección?
3. ¿Cómo afecta la elección de la técnica a lo que podemos generalizar?
4. Planteen el muestreo para estudiar un problema de su campus. ¿Qué marco muestral usarían y qué limitaciones declararían?

### English
**Before**
1. Why do we almost never study the whole population? What is at risk when studying only a part?
2. What does it mean for a sample to be «representative»?
3. What is the difference between a probability and a non-probability sample?

**During**
1. Which technique did you choose and what made you think it fit that population?
2. What happened to your estimates when you repeated the sampling? What does that say about variability?
3. Which group in the population ended up least represented in your sample and why?
4. How did the result change as the sample size grew? Is it always worth increasing it?

**After**
1. When is a non-probability technique justifiable? What is sacrificed by using it?
2. What is the difference between sampling error and selection bias?
3. How does the choice of technique affect what we can generalize?
4. Plan the sampling to study a problem on your campus. Which sampling frame would you use and which limitations would you declare?

