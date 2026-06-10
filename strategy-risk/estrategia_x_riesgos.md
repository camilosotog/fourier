# Módulo 4 - Estrategia y Gestión de Riesgos

Escenario de negocio: Se planea integrar una nueva pasarela de pagos en una aplicación
ya existente. El equipo de desarrollo entrega el código con retraso y solo queda una
ventana de 6 horas para realizar pruebas antes del lanzamiento oficial a producción.

## 1. Análisis de Riesgos

### Riesgo 1: Cobros duplicados

Es el primer riesgo que revisaría porque afecta directamente al cliente y al negocio.

Si por algún error se procesa más de una vez el mismo pago, el usuario puede ser cobrado varias veces y eso genera reclamos, devoluciones y pérdida de confianza.

**Prueba clave:**
Intentar generar varios pagos para la misma compra y validar que solo se procese una transacción.

---

### Riesgo 2: Pago aprobado pero compra no registrada

Puede ocurrir que la pasarela apruebe el pago pero la aplicación no actualice correctamente la orden.

En este caso el cliente ya pagó, pero para el sistema la compra no existe.

**Prueba clave:**
Validar que cuando la pasarela responde exitosamente también se actualice correctamente el estado de la orden.

---

### Riesgo 3: Errores de comunicación con la pasarela

Si la pasarela está lenta o presenta errores, el usuario puede quedar sin saber si el pago fue realizado o no.

**Prueba clave:**
Validar el comportamiento cuando la pasarela responde con error, timeout o indisponibilidad.

---

## 2. Estrategia de Pruebas

Como solo hay 6 horas disponibles, me enfocaría en los flujos más críticos.

### Prioridad 1: Smoke Testing

Validaría:

* Inicio del pago.
* Pago exitoso.
* Confirmación de la compra.
* Actualización del estado de la orden.

### Prioridad 2: Casos negativos

Validaría:

* Tarjeta inválida.
* Pago rechazado.
* Timeout o caída de la pasarela.

### Prioridad 3: Validaciones básicas de seguridad

Validaría que no se expongan datos sensibles y que la comunicación se realice de forma segura.

---

## 3. Casos Obligatorios para dar GO

1. Pago exitoso.
2. Pago rechazado.
3. Cancelación del pago por parte del usuario.
4. Validación de que no existan cobros duplicados.
5. Validación de actualización correcta de la orden después del pago.

---

## 4. Gestión de No Conformidades

Si encuentro un error que solo ocurre en un dispositivo específico y el tiempo se está agotando, primero registraría el defecto con su respectiva evidencia y analizaría el impacto.

Si el problema afecta el proceso de pago o puede generar pérdidas económicas, recomendaría detener el despliegue.

Si el problema es visual o afecta únicamente un dispositivo específico sin impactar el flujo principal del negocio, informaría el riesgo y permitiría continuar con el lanzamiento.
