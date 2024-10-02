const { PrismaClient } = require('@prisma/client');
const { subcategorySchema } = require('../../schema/categories.schema');
const prisma = new PrismaClient();

const updateSubcategory = async (req, res) => {
    const id = +req.params.id;
    const { name } = req.body;

    // Validate that the id is provided
    if (!id) return res.status(400).json({ error: "Id mütləq göndərilməlidir!" });

    // Validate the request body against the schema
    try {
        subcategorySchema.parse({ name, categoryId: id }); // Pass the body object (in this case, just `name`) to parse
    } catch (validationError) {
        return res.status(400).json({ error: validationError.errors });
    }

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
