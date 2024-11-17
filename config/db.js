const mongoose = require('mongoose');
const { mongoURI } = require('./dotenv');

// Función para conectar a la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1); // Terminar el proceso en caso de error
    }
};

module.exports = connectDB;
