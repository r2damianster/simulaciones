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

## Error de Muestreo

**Error = |Parámetro poblacional - Estadístico muestral|**

Reducción mediante:
- Aumentar el tamaño de muestra (n).
- Usar muestreo estratificado si la población es heterogénea.
- Asegurar aleatorización verdadera.
