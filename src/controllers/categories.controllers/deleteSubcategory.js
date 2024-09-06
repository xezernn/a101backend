const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteSubcategory = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.subcategory.delete({
            where: { id: Number(id) }
        });
        res.status(200).json({ message: "Subcategory deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteSubcategory;