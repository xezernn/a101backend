const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function editAdmin(req, res) {
    try {
        const id = +req.params.id;
        const { password } = req.body;
        const userid = req.user.id

        if (userid != 1) return res.status(403).json({ error: "Bu deyisikliyi eleye yalniz super adminin icazesi var! Super Admin: xezer " })


        if (!id) return res.status(400).json({ "error": "Id mutleq gelmelidir!" });
        if (!password) return res.status(400).json({ "error": "Yeni parol mutleq gelmelidir!" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                password: hashedPassword,
            },
        });

        if (!result) return res.status(404).json({ error: 'Bele istifadeçi yoxdur!' });

        res.status(200).json({ message: 'Parol ugurla deyisdirildi!' });

    } catch (error) {
        res.status(500).json({ error: "Xeta bas verdi!" });
    }
}

module.exports = editAdmin;
