const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const { endirim } = require('../../utils/endirim');
const prisma = new PrismaClient();

const querySchema = z.object({
  name: z.string()
    .min(2, { message: 'Product name must be at least 2 characters long' })
    .max(255, { message: 'Product name must be less than 255 characters' })
})

const searchProduct = async (req, res) => {
  const yoxla = querySchema.safeParse(req.query)
  if (!yoxla.success) {
    return res.status(400).json({ errors: yoxla.error.format().name._errors[0] });
  }

  try {
    querySchema.parse(req.query)
    const { name } = req.query;
    const filter = name ? {
      name: {
        contains: name,
        mode: 'insensitive'
      }
    } : {};

    const products = await prisma.product.findMany({
      where: filter,
      include: { category: true }
    });

    const array = products?.map(endirim)

    res.status(200).json({
      products: array,
      totalProducts: array.length,
      totalPages: null,
      currentPage: null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = searchProduct;
