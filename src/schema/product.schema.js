const { z } = require("zod");

const productSchema = z.object({
    img: z.array(z.string().url({ message: 'Invalid URL format' })).nonempty({ message: 'At least one image URL is required' }),
    name: z.string()
        .min(3, { message: 'Product name must be at least 3 characters long' })
        .max(255, { message: 'Product name must be less than 255 characters' })
        .trim()
        .nonempty({ message: 'Product name is required' }),
    price: z.number()
        .positive({ message: 'Price must be a positive number' })
        .min(0.01, { message: 'Price must be at least 0.01' })
        .max(10000, { message: 'Price must be less than 10,000' }),
    discount: z.number()
        .min(0, { message: 'Discount must be at least 0' })
        .int({ message: 'Discount must be an integer' })
        .max(100, { message: 'Discount must be less than or equal to 100' }),
    categoryId: z.number()
        .int({ message: 'Category ID must be an integer' })
        .positive({ message: 'Category ID must be a positive integer' }),
    description: z.string()
        .min(3, { message: 'Product description must be at least 3 characters long' })
        .max(255, { message: 'Product description must be less than 255 characters' })
        .trim(),
    metadata: z.object({}).optional()
});



module.exports = productSchema;