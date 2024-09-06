const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const { generateAccesToken, generateRefreshToken } = require('./jwt.controller');
const prisma = new PrismaClient();


const login = async (req, res) => {
    try {
        const { login, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { login }
        });

        if (!existingUser) {
            return res.status(401).json({ error: 'Invalid login credentials' });
        }

        const validPassword = await bcrypt.compare(password, existingUser.password);
        
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid login credentials' });
        } 

        const token = generateAccesToken({ userid: existingUser.id })
        const refresh = generateRefreshToken({ userid: existingUser.id })

        res.status(200).json({ refresh, token, status: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = login; 
