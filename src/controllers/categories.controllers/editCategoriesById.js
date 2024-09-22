const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const editCategoriesById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "Id mütləq göndərilməlidir!" })
        const { name, img } = req.body;
        const updatedCategory = await prisma.category.update({
            where: { id: Number(id) },
            data: { name, img }
        });

        if (updatedCategory) { res.status(200).json(updatedCategory); }
        else { res.status(404).json({ error: "Category not found" }); }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = editCategoriesById;

