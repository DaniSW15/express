// controllers/userController.js
const { hashPassword } = require('../services/hashService');  // Función de hash para la contraseña
const User = require('../models/User');  // Modelo de usuario

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Validar que los campos no estén vacíos
    if (!username || !password) {
        return res.status(400).json({ error: "Username y password son requeridos" });
    }

    // Cifrar la contraseña antes de guardarla
    const hashedPassword = await hashPassword(password);

    // Lógica para guardar el usuario en la base de datos (por ejemplo, usando Mongoose)
    const user = new User({
        username,
        password: hashedPassword
    });

    try {
        await user.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el usuario" });
    }
};

module.exports = { registerUser };
