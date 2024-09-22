/**
 * @swagger
 * tags:
 *   name: Şəkillər
 *   description: Şəkillərin yüklənməsi və silinməsi ilə bağlı əməliyyatlar
 */

/**
 * @swagger
 * /img:
 *   post:
 *     tags: 
 *       - Şəkillər
 *     summary: Yeni şəkil yükləyin
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               img:
 *                 type: string
 *                 format: binary
 *                 description: Yüklənəcək şəkil faylı (jpg, jpeg, png, gif formatlarında)
 *             required:
 *               - img
 *     responses:
 *       201:
 *         description: Şəkil uğurla yaradıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 img_url:
 *                   type: string
 *                   description: Yüklənmiş şəkilin URL-i
 *                 message:
 *                   type: string
 *                   description: Müvəffəqiyyət mesajı
 *       400:
 *         description: Yanlış field adı və ya fayl formatı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Səhv mesajı
 *       500:
 *         description: Daxili server xətası
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Xətanın açıqlaması
 */

/**
 * @swagger
 * /img/{filename}:
 *   delete:
 *     tags: 
 *       - Şəkillər
 *     summary: Mövcud şəkili silin
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *         description: Silinəcək şəkilin adı (filename)
 *     responses:
 *       200:
 *         description: Şəkil uğurla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Müvəffəqiyyət mesajı
 *       500:
 *         description: Şəkilin silinməsi uğursuz oldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Səhv mesajı
 */

const express = require('express');
const auth = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');
const createImg = require('../controllers/img.controller/createImg');
const deleteImage = require('../controllers/img.controller/deleteImg');
const router = express.Router();

router.post('/', auth, upload.single('img'), createImg);
router.delete('/:filename', auth, deleteImage);

module.exports = router;
