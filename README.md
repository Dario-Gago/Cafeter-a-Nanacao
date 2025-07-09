# ☕ Cafetería Nanacao API - Testing con Jest y Supertest

Bienvenido al repositorio de pruebas unitarias para la API REST de la **Cafetería Nanacao**, una aplicación desarrollada para gestionar cafés y validar su correcto funcionamiento mediante tests automatizados.

## 🧪 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Jest](https://jestjs.io/) - Framework de testing
- [Supertest](https://github.com/visionmedia/supertest) - Para testear endpoints HTTP

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clona este repositorio

```bash
git clone https://github.com/tu-usuario/cafeteria-nanacao.git
cd cafeteria-nanacao

2. Instala las dependencias

npm install
3. Ejecuta los tests

npm test

📁 Estructura del proyecto
bash
Copiar
Editar
cafeteria-nanacao/
│
├── cafes.json            # Datos base de cafés
├── index.js               # Lógica del servidor Express
├── tests/
│   └── server.spec.js    # Archivo de pruebas unitarias
└── README.md

| Método | Ruta         | Descripción                                                        |
| ------ | ------------ | ------------------------------------------------------------------ |
| GET    | `/cafes`     | Devuelve un array con al menos un café                             |
| DELETE | `/cafes/:id` | Devuelve 404 si el ID no existe                                    |
| POST   | `/cafes`     | Agrega un nuevo café y responde con 201                            |
| PUT    | `/cafes/:id` | Devuelve 400 si el ID del parámetro no coincide con el ID del body |
```
