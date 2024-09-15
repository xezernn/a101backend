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

    const yeniSliders = sliders.map(item=> {
      return {
        id: item.id,
        img: item.img,
        categoryId: item.category.id,
        subcategoryId: item.subcategory.id,
        slug: item.category.name.toLocaleLowerCase("tr-Az").split(" ").join("-") + "/" +  item.subcategory.name.toLocaleLowerCase("tr-Az").split(" ").join("-")
      }
    })

    res.status(200).json(yeniSliders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSliders;
