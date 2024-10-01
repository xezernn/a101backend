const { PrismaClient } = require('@prisma/client');
const { endirim } = require('../../utils/endirim');
const prisma = new PrismaClient();

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // Ümumi məhsul sayını əldə edin
    const totalProducts = await prisma.product.count();

    // Maksimum səhifə sayını hesablamaq
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await prisma.product.findMany({
      skip,
      take: limit,
    });

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

module.exports = getProducts;
