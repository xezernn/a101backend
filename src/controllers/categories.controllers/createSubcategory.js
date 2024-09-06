const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const prisma = new PrismaClient();

const subcategorySchema = z.object({
    categoryName: z.string()
        .min(3, { message: 'Subcategory name must be at least 3 characters long' })
        .max(50, { message: 'Subcategory name must be less than 255 characters' })
        .trim()
        .min(1, { message: 'Subcategory name is required' }),
    categoryId: z.number()
        .int({ message: 'Category ID must be an integer' })
        .min(1, { message: 'Category ID is required' })
});

const createSubcategory = async (req, res) => {
    
    const parseResult = subcategorySchema.safeParse({
        ...req.body,
        categoryId: Number(req.body.categoryId),
    });
    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult });
    }

    try {
        const { categoryName, categoryId } = parseResult.data;
        const subcategory = await prisma.subcategory.create({
            data: {
                categoryName,
                categoryId
            }
        });
        res.status(201).json({ message: "subcategory created has succesefuly alla sene sukur", subcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createSubcategory;