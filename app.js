const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Conexión a la Base de Datos con Mongoose
const connectDB = require('./src/config/db');

// Importar archivos de rutas
const categoryRoutes = require('./src/routes/categoryRoute');
const userRoutes = require('./src/routes/userRoute');
const productRoutes = require('./src/routes/productRoute');

// Inicializar la aplicación Express
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Conectar a la Base de Datos
connectDB();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.json({ message: 'API de Plataforma de Compra/Venta funcionando correctamente 🚀' });
});

// Registrar Prefijos de Rutas
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Levantar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});