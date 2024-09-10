const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateSubcategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!id) return res.status(400).json({ error: "Id mütləq göndərilməlidir!" })

    try {
        const subcategory = await prisma.subcategory.update({
            where: { id: Number(id) },
            data: { name },
        });
        res.status(200).json({ message: "Subcategory updated successfully", subcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = updateSubcategory;