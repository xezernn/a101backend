const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});

const deleteImageByPathname = async (filename) => {
    const bucketName = process.env.S3_BUCKET_NAME;
    try {
        const deleteParams = {
            Bucket: bucketName,
            Key: filename,
        }
        await s3.send(new DeleteObjectCommand(deleteParams));

    } catch (error) {
        console.error(error);
    }
};

module.exports = deleteImageByPathname; 