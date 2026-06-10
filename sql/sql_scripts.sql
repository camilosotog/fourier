Escenario: Imagina una base de datos con dos tablas principales:
1. usuarios (id, nombre, correo, fecha_registro, estado)
2. pedidos (id, usuario_id, producto, valor, fecha_pedido)
Ejercicios a resolver: Escribe las sentencias SQL para obtener la siguiente información:
• Consulta Básica: Seleccionar todos los campos de la tabla usuarios donde el
estado sea 'activo' y la fecha_registro sea posterior al 1 de enero de 2024.
• Filtrado Específico: Listar únicamente el nombre y el correo de los usuarios cuyo
correo termine en '@empresa.com'.
• Conteo y Unicidad: Realizar un conteo (COUNT) de cuántos productos distintos
(DISTINCT) se han vendido en la tabla de pedidos.
• Relacionamiento (JOIN): Realizar una consulta que devuelva el nombre del
usuario y el producto que compró, uniendo las tablas usuarios y pedidos a
través del campo correspondiente

-- Consulta Básica
SELECT * 
FROM usuarios as u
WHERE u.estado = 'activo'
AND u.fecha_registro > '2024-01-01';

-- Filtrado Específico
SELECT nombre, correo
FROM usuarios as u
WHERE u.correo LIKE '%@empresa.com';

-- Conteo y Unicidad

-- Relacionamiento (JOIN)
SELECT u.nombre, p.producto
FROM usuarios as u
JOIN pedidos as p ON u.id = p.usuario_id;