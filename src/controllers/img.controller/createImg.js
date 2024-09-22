const { z } = require('zod');

const imageSchema = z.object({
    file: z.object({
        location: z.string().url(),
        originalname: z.string().regex(/.*\.(jpg|jpeg|png|gif)$/i, 'Invalid file type'),
    }),
});

function createImg(req, res) {

    if (req.file.fieldname !== 'img') {
        res.status(400).json({
            message: `Sizden gözlənilən field name: "img", Sizin göndərdiyiniz filed name: ${req.file.fieldname} `,
        });
        return
    }

    try {
        imageSchema.parse(req);

        res.status(201).json({
            img_url: req.file.location,
            message: 'Image created successfully',
        });
    } catch (err) {
        // Error response
        res.status(500).json({
            message: err.errors ? err.errors[0].message : 'Internal Server Error',
        });
    }
}

module.exports = createImg;
