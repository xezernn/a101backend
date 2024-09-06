const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require("dotenv").config();

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: Malformed token' });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await prisma.user.findUnique({
            where: { id: decoded.userid }
        });

        if (!user.id) {
            return res.status(401).json({ error: 'Unauthorized: Invalid user' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Token verification error:", error);
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

module.exports = auth;
