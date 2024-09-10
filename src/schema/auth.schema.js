const { z } = require("zod");

const authSchema = z.object({
    username: z.string()
        .min(3, { message: 'Login must be at least 3 characters long' })
        .max(20, { message: 'Login must be less than 255 characters' })
        .trim()
        .min(1, { message: 'Login is required' }),
    password: z.string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .trim()
        .min(1, { message: 'Password is required' })
})

module.exports = authSchema;