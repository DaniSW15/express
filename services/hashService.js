const bcrypt = require('bcrypt');

// Función para hashear la contraseña
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

// Función para comparar contraseñas
async function comparePasswords(inputPassword, hashedPassword) {
    return await bcrypt.compare(inputPassword, hashedPassword);
}

// Exportar las funciones
module.exports = { hashPassword, comparePasswords };
