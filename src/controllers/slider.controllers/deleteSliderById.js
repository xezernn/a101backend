const { PrismaClient } = require('@prisma/client');
const deleteImageByPathname = require('../img.controller/deleteImgByPathname');
const prisma = new PrismaClient();

const deleteSliderById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const slider = await prisma.slider.findUnique({
            where: { id }
        });

        if (!slider) {
            return res.status(404).json({ error: 'Slider not found' });
        }

        if (slider.img && slider.img.length > 0) {
            for (const imageUrl of slider.img) {
                const filename = imageUrl.split('/').pop();
                await deleteImageByPathname(filename);
            }
        }

        const deletedSlider = await prisma.slider.delete({
            where: { id }
        });

        res.status(200).json({ message: 'Slider deleted successfully', deletedSlider });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteSliderById;
