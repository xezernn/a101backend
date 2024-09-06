const validator = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ status: false, errors: result.error.format() });
        }
        next();
    }
}

module.exports = validator;
