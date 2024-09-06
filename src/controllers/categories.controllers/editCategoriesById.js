const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const editCategoriesById = async (req, res) => {  
    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        const updatedCategory = await prisma.category.update({
            where: { id: Number(id) },
            data: { categoryName }
        });
        if (updatedCategory) { res.status(200).json(updatedCategory); }
        else { res.status(404).json({ error: "Category not found" }); }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = editCategoriesById ;

