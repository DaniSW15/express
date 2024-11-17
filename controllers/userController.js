const { hashPassword } = require('../services/hashService');
const User = require('../models/User');

const registerUser = async (req, res) => {
    const { name, email, password, role = 'cliente' } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Nombre, email y contraseña son requeridos" });
    }

    try {
        const hashedPassword = await hashPassword(password);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role // Por defecto será 'cliente'
        });

        await user.save();
        res.status(201).json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el usuario" });
    }
};

const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Nombre, email y contraseña son requeridos" });
    }

    try {
        const hashedPassword = await hashPassword(password);

        const admin = new User({
            name,
            email,
            password: hashedPassword,
            role: 'admin' // Rol fijo para administradores
        });

        await admin.save();
        res.status(201).json({ message: "Administrador registrado con éxito", admin });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar al administrador" });
    }
};

const registerVet = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Nombre, email y contraseña son requeridos" });
    }

    try {
        const hashedPassword = await hashPassword(password);

        const vet = new User({
            name,
            email,
            password: hashedPassword,
            role: 'vet' // Rol fijo para veterinarios
        });

        await vet.save();
        res.status(201).json({ message: "Veterinario registrado con éxito", vet });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar al veterinario" });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};

module.exports = { registerUser, registerAdmin, registerVet, getUsers };
