const User = require('../models/User');  // Asegúrate de que el modelo User esté importado
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/dotenv');  // Asegúrate de tener la variable jwtSecret en tu archivo .env

// Función para autenticar al usuario y generar el token
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(401).json({ error: "Usuario no encontrado" });
    }

    // Comparar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Crear un JWT
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    // Enviar el token al cliente
    res.status(200).json({ token });
};

module.exports = { loginUser };
