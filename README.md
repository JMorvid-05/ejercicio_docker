Ejercicio Docker

API REST sencilla desarrollada con Node.js, Express y Docker.

Ejecutar con Docker

Construir la imagen:

docker build -t ejercicio_docker:1.0 .

Crear y ejecutar el contenedor:

docker run -d -p 3000:3000 --name mi_primer_container ejercicio_docker:1.0
Endpoints
GET /games — Obtener videojuegos
POST /games — Crear videojuego
PUT /games/:id — Actualizar videojuego
DELETE /games/:id — Eliminar videojuego
