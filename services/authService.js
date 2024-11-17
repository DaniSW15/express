const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/dotenv');

function generateToken(user) {
    return jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });
}

function verifyToken(token) {
    return jwt.verify(token, jwtSecret);
}

module.exports = { generateToken, verifyToken };
