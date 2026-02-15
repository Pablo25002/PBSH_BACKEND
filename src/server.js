require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongoConfig');
const { createAdmin } = require('./libs/initialSetup'); // Importar script

const app = express();

// 1. Conexión y Setup Inicial
connectDB();
createAdmin(); // Se ejecuta al iniciar

app.use(cors());
app.use(express.json());

// 2. Rutas Públicas
app.use('/api/auth', require('./routes/authRoutes'));

// 3. Rutas Privadas (Asegúrate de que tus archivos de rutas usen el validarJWT)
app.use('/api/customers', require('./routes/customersRoutes'));
app.use('/api/products', require('./routes/productsRoutes'));
app.use('/api/categories', require('./routes/categoriesRoutes'));
app.use('/api/suppliers', require('./routes/suppliersRoutes'));
app.use('/api/notes', require('./routes/notesRoutes'));
app.use('/api/payments', require('./routes/paymentsRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
});