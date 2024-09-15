const { PrismaClient } = require('@prisma/client');
const productSchema = require('../../schema/product.schema');
const prisma = new PrismaClient();

const editProduct = async (req, res) => {
    const id = Number(req.params.id);
    let {
        imageUrl, name, price, discount, categoryId, subcategoryId,
        description, metadata, isTopSelling, isStok, isCheaps
    } = req.body;

    if (typeof isTopSelling === 'undefined') isTopSelling = false;
    if (typeof isStok === 'undefined') isStok = true;
    if (typeof isCheaps === 'undefined') isCheaps = false;


    try {
        const parseResult = productSchema.safeParse({
            imageUrl,
            name,
            price: Number(price),
            discount: Number(discount),
            categoryId: Number(categoryId),
            subcategoryId: Number(subcategoryId),
            description,
            metadata,
            isTopSelling,
            isStok,
            isCheaps
        });

        if (!parseResult.success) {
            return res.status(400).json({
                errors: parseResult.error.errors.map(err => ({
                    field: err.path[0],
                    message: err.message
                }))
            });
        }

        const updatedProduct = await prisma.product.update({
            where: { id },
            data: parseResult.data
        });

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);

        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Məhsul tapılmadı' });
        }

        res.status(500).json({ error: 'Server xətası baş verdi' });
    }
};

module.exports = editProduct;
