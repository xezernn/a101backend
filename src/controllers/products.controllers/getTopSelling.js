const { PrismaClient } = require('@prisma/client');
const { endirim } = require('../../utils/endirim');
const prisma = new PrismaClient();

const getTopSellingProducts = async (req, res) => {
    try {
        const topSellingProducts = await prisma.product.findMany({
            where: {
                isTopSelling: true
            },
            take: 20
        });

        const array = topSellingProducts?.map(endirim)

        res.status(200).json(array);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getTopSellingProducts