# Parte B – Análisis de Logs y Diagnóstico

## Proceso de Investigación

Si durante la prueba de carga la tasa de error aumenta al 15%, los tiempos de respuesta se triplican y aparecen errores 504 y 499, comenzaría revisando los resultados de la prueba para identificar en qué momento empezó la degradación del sistema.

Posteriormente revisaría los logs del backend, ya que el error 504 Gateway Timeout normalmente indica que el servidor no logró responder dentro del tiempo esperado.

También validaría el comportamiento de la base de datos, buscando consultas lentas, bloqueos o saturación de conexiones que puedan afectar el tiempo de respuesta de la aplicación.

Respecto al error 499 Client Closed Request, generalmente indica que el cliente canceló la solicitud antes de recibir respuesta, normalmente porque el sistema estaba tardando demasiado en responder.

## Componentes Sospechosos

Los principales componentes que investigaría serían:

* Backend.
* Base de datos.
* API Gateway o Proxy.
* Servicios externos consumidos por la aplicación.

## Herramientas Utilizadas

### AWS CloudWatch

CloudWatch me permitiría revisar logs, métricas y alarmas de los servicios involucrados. Con esta herramienta podría identificar incrementos en el consumo de CPU, memoria, errores de aplicación o tiempos de respuesta elevados durante el periodo en el que se presentó la degradación.

### Grafana

Grafana me ayudaría a visualizar métricas de rendimiento mediante dashboards, permitiendo correlacionar el aumento de usuarios concurrentes con el incremento en tiempos de respuesta, errores y consumo de recursos. Esto facilita identificar rápidamente en qué componente comenzó el problema.

## Conclusión

Mi hipótesis principal sería un problema de rendimiento en el backend o en la base de datos, lo que provoca tiempos de respuesta elevados, errores 504 por timeout y posteriormente errores 499 debido a que el cliente cancela la solicitud antes de recibir respuesta.
