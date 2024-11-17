const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Ruta protegida
router.get('/protectedRoute', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Acceso autorizado', user: req.user });
});

module.exports = router;
