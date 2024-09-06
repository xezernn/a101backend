const { PrismaClient } = require('@prisma/client');
const { endirim } = require('../../utils/endirim');
const prisma = new PrismaClient();

const getProducts = async (req, res) => {
  try {

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const products = await prisma.product.findMany({
      select: {
        id: true,
        img: true,
        name: true,
        category: true,
        subcategory: true,
        description: true,
        discount: true,
        price: true,
        metadata: true,
        createdAt: true,
        updatedAt: true,
        isTopSelling: true
      },
      skip: skip, take: limit,
    });

    const array = products?.map(endirim)

    res.status(200).json(array);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProducts;
