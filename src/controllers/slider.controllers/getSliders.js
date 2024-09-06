const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSliders = async (req, res) => {
  try {
    const sliders = await prisma.slider.findMany({
      select: {
        id: true,
        img: true,
        category: true,
        subcategory: true
      },
    });

    res.status(200).json(sliders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSliders;
