const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const bucketName = process.env.S3_BUCKET_NAME


const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
});


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: `${bucketName}`,
        key: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

module.exports = upload;
