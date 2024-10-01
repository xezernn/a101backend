const { PrismaClient } = require('@prisma/client');
const { endirim } = require('../../utils/endirim');
const prisma = new PrismaClient();

const getProductsByCategory = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id) return res.status(400).json({ error: 'Məhsulun id-si mütləq rəqəm olmalıdır!' });

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;

        // Ümumi məhsul sayını əldə edin
        const totalProducts = await prisma.product.count({
            where: { categoryId: id }
        });

        // Maksimum səhifə sayını hesablamaq
        const totalPages = Math.ceil(totalProducts / limit);

        const products = await prisma.product.findMany({
            where: { categoryId: id },
            skip,
            take: limit,
        });

        if (!products.length) return res.status(404).json({ "error": `Daxil etdiyiniz id (${id}) üzrə məhsullar tapılmadı!` });

        const array = products?.map(endirim);

        // Nəticələrə totalProducts və totalPages əlavə edin
        res.status(200).json({
            products: array,
            totalProducts,
            totalPages,
            currentPage: page,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProductsByCategory;
