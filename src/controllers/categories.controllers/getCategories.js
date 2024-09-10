const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: {
                subcategories: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        const formattedCategories = categories.map(category => ({
            id: category.id,
            name: category.name,
            subcategory: category.subcategories.map(subcat => ({
                id: subcat.id,
                name: subcat.name,
                slug: `${category.name.toLocaleLowerCase("tr-Tr").split(" ").join("-")}/${subcat.name.toLocaleLowerCase("tr-Tr").split(" ").join("-")}`
            }
            ))
        }))

        res.status(200).json(formattedCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getCategories;