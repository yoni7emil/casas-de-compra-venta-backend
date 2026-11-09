# 🛒 Backend API - Plataforma de Compra y Venta (UTN BA)

API RESTful desarrollada con **Node.js**, **Express** y **MongoDB (Mongoose)** como parte del proyecto final de la UTN. Implementa una arquitectura modular limpia por capas (`models`, `services`, `controllers`, `routes`, `middleware`), control de acceso mediante tokens JWT y encriptación de contraseñas con bcrypt.

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y escalable:

```text
CasasDeCompraVenta/
│
├── src/
│   ├── config/         # Configuración de la conexión a la base de datos (db.js)
│   ├── controllers/    # Controladores HTTP (lógica de petición y respuesta)
│   ├── middleware/     # Middlewares de autenticación y seguridad (verifyToken.js)
│   ├── models/         # Esquemas y modelos de Mongoose (User, Category, Product)
│   ├── routes/         # Definición de rutas de la API
│   └── services/       # Capa de servicios y lógica de negocio (interacción con Mongoose)
│
├── .env                # Variables de entorno locales
├── .env.example        # Plantilla de variables de entorno
├── app.js              # Archivo principal de entrada al servidor Express
└── package.json        # Dependencias y scripts del proyecto

```

---

## 🚀 Tecnologías y Dependencias

* **Node.js** & **Express**: Entorno de ejecución y framework web.
* **MongoDB** & **Mongoose**: Base de datos NoSQL y ODM para modelado de datos.
* **Bcrypt**: Encriptación segura de contraseñas para usuarios.
* **JSON Web Token (JWT)**: Autenticación basada en tokens para rutas protegidas.
* **CORS**: Habilitación de recursos compartidos de origen cruzado.
* **Dotenv**: Gestión de variables de entorno.
* **Nodemon**: Reinicio automático del servidor en entorno de desarrollo.

---

## ⚙️ Instrucciones de Configuración y Ejecución

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone <url-de-tu-repositorio>
cd CasasDeCompraVenta
npm install

```

### 2. Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto basándote en la siguiente estructura:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/plataforma_compra_venta
JWT_SECRET=Una_clave_secreta_super_segura_para_el_token
NODE_ENV=development

```

### 3. Ejecutar la aplicación

* **Modo desarrollo (con Nodemon):**
```bash
npm run dev

```


* **Modo producción:**
```bash
npm start

```



---

## 📡 Endpoints de la API

### 🏷️ Categorías (`/api/categories`)

* `GET /api/categories` - Obtiene todas las categorías (Público).
* `POST /api/categories` - Crea una nueva categoría (Público/Protegido).
* `DELETE /api/categories/:id` - Elimina una categoría por ID (Protegido).

### 👤 Usuarios (`/api/users`)

* `POST /api/users/register` - Registra un nuevo usuario (Hashea la contraseña automáticamente).
* `POST /api/users/login` - Inicia sesión y devuelve un token JWT de autenticación.

### 📦 Productos (`/api/products`)

* `GET /api/products` - Obtiene todos los productos con sus relaciones populadas (`category_id` y `seller_id`) (Público).
* `GET /api/products/:id` - Obtiene un producto específico por su ID con relaciones populadas (Público).
* `POST /api/products` - Crea un nuevo producto (**Protegido con JWT**).
* `PUT /api/products/:id` - Actualiza un producto existente (**Protegido con JWT**).
* `DELETE /api/products/:id` - Elimina un producto (**Protegido con JWT**).

---

## 🔒 Seguridad y Autenticación

Para consumir las rutas protegidas de productos (`POST`, `PUT`, `DELETE`), es necesario enviar un header HTTP en la petición:

* **Key:** `Authorization`
* **Value:** `Bearer <tu_token_jwt_obtenido_en_login>`

