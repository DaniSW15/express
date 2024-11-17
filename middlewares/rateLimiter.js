const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Límite de 100 peticiones
    message: "Demasiadas peticiones desde esta IP, por favor intenta más tarde"
});

module.exports = limiter;
