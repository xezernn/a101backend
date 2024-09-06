const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { z } = require("zod");

const categorySchema = z.object({
    categoryName: z.string()
        .min(3, { message: 'Category name must be at least 3 characters long' })
        .max(50, { message: 'Category name must be less than 255 characters' })
        .trim()        
});

const createCategory = async (req, res) => {
    
    const parseResult = categorySchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ validaton_errors: parseResult });
    }
    try {
        const { categoryName } = parseResult.data;
        const category = await prisma.category.create({
            data: { categoryName }
        });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createCategory;
