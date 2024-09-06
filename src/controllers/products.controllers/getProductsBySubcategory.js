const { PrismaClient } = require('@prisma/client');
const { endirim } = require('../../utils/endirim');
const prisma = new PrismaClient();

const getProductsBySubcategory = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id) return res.status(400).json({ error: 'Məhsulun id-si mütləq rəqəm olmalıdır!' });

        const products = await prisma.subcategory.findUnique({
            where: { id }
        }).Product();

        const array = products?.map(endirim)

        res.status(200).json(array);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getProductsBySubcategory;
