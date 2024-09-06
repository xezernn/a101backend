const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const prisma = new PrismaClient();

const sliderSchema = z.object({
    img: z.array(z.string().url({ message: 'Invalid URL format' })).nonempty({ message: 'At least one image URL is required' }).optional(),
    categoryId: z.number()
        .int({ message: 'Category ID must be an integer' })
        .positive({ message: 'Category ID must be a positive integer' }),
    subcategoryId: z.number()
        .int({ message: 'Category ID must be an integer' })
        .positive({ message: 'Category ID must be a positive integer' })
});

const createSlider = async (req, res) => {
    const { img, categoryId, subcategoryId } = req.body
    const parseResult = sliderSchema.safeParse({
        img,
        categoryId: parseInt(categoryId),
        subcategoryId: parseInt(subcategoryId)
    });

    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult.error.format().name._errors[0] });
    }

    try {
        const { categoryId, subcategoryId, img } = parseResult.data;
        const slider = await prisma.slider.create({
            data: {
                img,
                categoryId,
                subcategoryId,
            }
        });
        res.status(201).json(slider);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = createSlider;
