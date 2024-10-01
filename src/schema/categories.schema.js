const { z } = require("zod");

const categorySchema = z.object({
    img: z.array(z.string())
        .nonempty({ message: 'At least one image is required' })
        .min(1, { message: 'Category must have at least one image' }),
    name: z.string()
        .min(3, { message: 'Category name must be at least 3 characters long' })
        .max(50, { message: 'Category name must be less than 50 characters' })
        .trim()
        .nonempty({ message: 'Category name is required' })
});


const subcategorySchema = z.object({
    name: z.string()
        .min(3, { message: 'Subcategory name must be at least 3 characters long' })
        .max(25, { message: 'Subcategory name must be less than 255 characters' })
        .trim()
        .min(1, { message: 'Subcategory name is required' }),
    categoryId: z.number()
        .int({ message: 'Category ID must be an integer' })
})


module.exports = { categorySchema, subcategorySchema }