const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const prisma = new PrismaClient();

const deleteCategoryByIdSchema = z.object({
    id: z.number()
        .int({ message: 'Category ID must be an integer' })
        .min(1, { message: 'Category ID is required' })
});

const deleteCategoryById = async (req, res) => {
    const parseResult = deleteCategoryByIdSchema.safeParse({ id: Number(req.params.id) });
    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult});
    }
    try {
        const { id } = parseResult.data;                
        await prisma.category.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteCategoryById;
