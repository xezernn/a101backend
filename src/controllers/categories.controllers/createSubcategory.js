const { PrismaClient } = require('@prisma/client');
const { subcategorySchema } = require('../../schema/categories.schema');
const prisma = new PrismaClient();



const createSubcategory = async (req, res) => {

    const parseResult = subcategorySchema.safeParse({
        ...req.body,
        categoryId: Number(req.body.categoryId),
    });
    if (!parseResult.success) return res.status(400).json({ errors: parseResult });


    try {
        const { name, categoryId } = parseResult.data;
        const subcategory = await prisma.subcategory.create({
            data: {
                name,
                categoryId
            }
        });
        res.status(201).json({ message: "subcategory created has succesefuly alla sene sukur", subcategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createSubcategory;