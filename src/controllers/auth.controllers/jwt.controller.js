const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET

function generateAccesToken(user) {
    return jwt.sign(user, JWT_SECRET, { expiresIn: '60m' });
}

function generateRefreshToken(user) {
    return jwt.sign(user, JWT_REFRESH_SECRET, { expiresIn: '7d' });
}

module.exports = {
    generateAccesToken, generateRefreshToken  
}