const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateSubcategory = async (req, res) => {
    const { id } = req.params;
    const { categoryName } = req.body;

    try {
        const subcategory = await prisma.subcategory.update({
            where: { id: Number(id) },
            data: { categoryName },
        });
        res.status(200).json({ message: "Subcategory updated successfully", subcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = updateSubcategory;