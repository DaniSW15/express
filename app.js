const express = require('express');
const { mongoURI, port } = require('./config/dotenv');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimiter');

// Rutas
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(express.json());
app.use(limiter);

// Conexión a la base de datos
mongoose.connect(mongoURI)
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch(err => console.error("Error al conectar a MongoDB:", err));

// Rutas principales
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenido a mi API" });
});

// Middleware de errores
app.use(errorHandler);

module.exports = app; // Exportar para usar en server.js
