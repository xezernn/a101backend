const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getCategoriesById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id) return res.status(400).json({ error: 'Məhsulun id-si mütləq rəqəm olmalıdır!' });

        const categories = await prisma.category.findMany({
            where: { id: id },
            include: {
                subcategories: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });

        const yeniObj = {
            id: categories[0].id,
            name: categories[0].name,
            subcategory: categories[0].subcategories.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    slug : `${categories[0].name.toLocaleLowerCase("tr-Tr").split(" ").join("-")}/${item.name.toLocaleLowerCase("tr-Tr").split(" ").join("-")}`                
                }
            })
        }

        res.status(200).json(yeniObj);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getCategoriesById;