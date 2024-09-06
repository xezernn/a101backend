const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});


const deleteImage = async (req, res) => {
    const { filename } = req.params;
    const bucketName = process.env.S3_BUCKET_NAME;
    try {
        const deleteParams = {
            Bucket: bucketName,
            Key: filename,
        }
        await s3.send(new DeleteObjectCommand(deleteParams));

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete image' });
    }
};


module.exports = deleteImage; 