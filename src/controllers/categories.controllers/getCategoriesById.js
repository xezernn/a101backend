const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getCategoriesById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id) return res.status(400).json({ error: 'Məhsulun id-si mütləq rəqəm olmalıdır!' });

        const categories = await prisma.category.findMany({
            where: { id: id },
            include: {
                Subcategory: {
                    select: {
                        id: true,
                        categoryName: true
                    }
                }
            }
        });

        const yeniObj = {
            id: categories[0].id,
            categoryName: categories[0].categoryName,
            subcategory: categories[0].Subcategory.map(item => {
                return {
                    id: item.id,
                    categoryName: item.categoryName,
                    slug : `${categories[0].categoryName.toLocaleLowerCase("tr-Tr").split(" ").join("-")}/${item.categoryName.toLocaleLowerCase("tr-Tr").split(" ").join("-")}`                
                }
            })
        }

        res.status(200).json(yeniObj);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getCategoriesById;