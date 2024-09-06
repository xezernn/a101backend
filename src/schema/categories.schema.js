const { z } = require("zod");

const categorySchema = z.object({
    categoryName: z.string()
        .min(3, { message: 'Category name must be at least 3 characters long' })
        .max(50, { message: 'Category name must be less than 255 characters' })
        .trim()
        .min(1, { message: 'Category name is required' })
});

const subcategorySchema = z.object({
    categoryName: z.string()
        .min(3, { message: 'Subcategory name must be at least 3 characters long' })
        .max(25, { message: 'Subcategory name must be less than 255 characters' })
        .trim()
        .min(1, { message: 'Subcategory name is required' }),
    categoryId: z.number()
        .int({ message: 'Category ID must be an integer' })
        .min(1, { message: 'Category ID is required' })
        .max(3, { message: 'Category ID must be ' })
})


module.exports = { categorySchema, subcategorySchema }