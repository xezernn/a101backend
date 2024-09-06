const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const { generateAccesToken, generateRefreshToken } = require('./jwt.controller');
const prisma = new PrismaClient();

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

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

                // Token-dən alınan istifadəçi rolu yoxlanılır
                if (decoded.role !== 'ADMIN') {
                    return res.status(403).json({ error: 'Bu əməliyyat üçün icazəniz yoxdur' });
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
                role: role || 'USER' // Əgər rol "ADMIN" deyilirsə, avtomatik olaraq "USER" kimi qeyd edilir
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
