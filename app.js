const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimiter');
const connectDB = require('./config/db');

// Rutas
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(express.json());
app.use(limiter);

// Conexión a la base de datos
connectDB();

// Rutas principales
app.use('/api/v1', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenido a mi API" });
});

// Middleware de errores
app.use(errorHandler);

module.exports = app; // Exportar para usar en server.js
