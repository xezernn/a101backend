const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const prisma = new PrismaClient();

const getProductByIdSchema = z.object({
    id: z.number()
        .int({ message: 'Product ID must be an integer' })
        .min(1, { message: 'Product ID is required' })
});

const getProductById = async (req, res) => {
    const id = Number(req.params.id);
    const parseResult = getProductByIdSchema.safeParse({ id: id });

    if (!id) return res.status(400).json({ error: 'Məhsulun id-si mütləq rəqəm olmalıdır!' });


    if (!parseResult.success) return res.status(400).json({ errors: parseResult.error.format() });


    try {
        const { id } = parseResult.data;
        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                categoryId: false,
                subcategoryId: false,
                category: true,
                subcategory: true
            },
        });

        if (!product) return res.status(404).json({ message: 'Product not found' });

        const obj = {
            ...product,
            totalPrice: product.discount > 0 ? (product.price * product.discount) / 100 : product.price
        }
        
        res.status(200).json(obj);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProductById;
