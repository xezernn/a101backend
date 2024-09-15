const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { generateAccesToken, generateRefreshToken } = require('./jwt.controller');
const prisma = new PrismaClient();

const register = async (req, res) => {
    try {
        let status = false
        const { username, password } = req.body;
        let role = req.body.role
        if (!role) role = "USER"

        if (!username || !password) return res.status(400).json({ "error": "'username' ve ya 'password' parametrleri gonderilmeyib" })

        // İstifadəçinin mövcud olub-olmadığını yoxlayırıq
        const existingUser = await prisma.user.findUnique({
            where: { username }
        });

        if (existingUser) {
            return res.status(409).json({ error: 'Bu istifadəçi adı artıq mövcuddur' });
        }

        // Əgər istifadəçi "ADMIN" rolunu təyin etmək istəyirsə, Authorization token-i yoxlanmalıdır
        if (role === 'ADMIN') {
            const authHeader = req.headers['authorization'];

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(403).json({ error: 'İcazəniz yoxdur' });
            }

            const token = authHeader.split(' ')[1];
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log("merhele1");

                // Token-dən alınan istifadəçi rolu yoxlanılır
                if (decoded.role === 'ADMIN') {
                    status = true
                }
            } catch (error) {
                return res.status(403).json({ error: 'Etibarsız token' });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                role: status ? "ADMIN" : "USER"
            }
        });

        // Tokenləri yaradırıq
        const token = generateAccesToken({ userid: newUser.id, role: newUser.role });
        const refresh = generateRefreshToken({ userid: newUser.id, role: newUser.role });

        // İstifadəçini uğurla qeydiyyatdan keçirdikdən sonra cavab göndəririk
        res.status(201).json({ token, refresh, username: newUser.username, role: newUser.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = register;
