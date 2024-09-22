const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { categorySchema } = require('../../schema/categories.schema');


const createCategory = async (req, res) => {

    const parseResult = categorySchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ validaton_errors: parseResult });
    }
    try {
        const { name, img } = parseResult.data;
        const category = await prisma.category.create({
            data: {
                name,
                img
            }
        });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createCategory;
