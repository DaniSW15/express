// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/dotenv'); // Verifica que 'jwtSecret' esté correctamente configurado

function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Obtener el token desde el encabezado Authorization
    if (!token) return res.status(401).json({ error: "Token no proporcionado" });

    try {
        const decoded = jwt.verify(token, jwtSecret); // Verificar el token usando la clave secreta
        req.user = decoded; // Almacenar el usuario decodificado en la solicitud
        next(); // Continuar con el siguiente middleware o ruta
    } catch (error) {
        res.status(403).json({ error: "Token inválido" }); // Si el token no es válido
    }
}

module.exports = authMiddleware; // Exportar la función middleware
