// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, registerAdmin, registerVet, getUsers } = require('../controllers/userController'); // Controlador para registrar usuarios
const authMiddleware = require('../middlewares/authMiddleware'); // Importar middleware de autenticación
const { loginUser } = require('../controllers/authController');

// Ruta de registro (no necesita autenticación)
router.post('/register', registerUser);

// Ruta protegida (requiere autenticación)
router.get('/profile', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Perfil de usuario', user: req.user });
});

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta de creación de usuario administrador
router.post('/register/admin', registerAdmin);

// Ruta de veterinario
router.post('/register/vet', registerVet);

// Ruta para obtener todos los usuarios
router.get('/users', getUsers);

module.exports = router; // Exportar el router con las rutas definidas
