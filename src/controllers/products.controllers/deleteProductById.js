const { PrismaClient } = require('@prisma/client');
const deleteImageByPathname = require('../img.controller/deleteImgByPathname');
const prisma = new PrismaClient();

const deleteProductById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const product = await prisma.product.findUnique({
            where: { id },
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        if (product.img && product.img.length > 0) {
            for (const imageUrl of product.img) {
                const filename = imageUrl.split('/').pop();
                await deleteImageByPathname(filename);
            }
        }

        const deletedProduct = await prisma.product.delete({
            where: { id },
        });

        res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteProductById;
