/**
 * @swagger
 * tags:
 *   name: Slayder
 *   description: Slayder şəkilləri ilə bağlı əməliyyatlar
 */

/**
 * @swagger
 * /slider:
 *   post:
 *     tags: 
 *       - Slayder
 *     summary: Yeni slayder yaradın
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               img:
 *                 type: string
 *                 description: Slayder üçün şəkilin URL-i
 *               categoryId:
 *                 type: integer
 *                 description: Slayderin aid olduğu kateqoriya ID-si
 *               subcategoryId:
 *                 type: integer
 *                 description: Slayderin aid olduğu alt kateqoriya ID-si
 *     responses:
 *       201:
 *         description: Slayder uğurla yaradıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Slayderin unikal ID-si
 *                 img:
 *                   type: string
 *                   description: Yüklənmiş şəklin URL-i
 *                 categoryId:
 *                   type: integer
 *                   description: Slayderin aid olduğu kateqoriya ID-si
 *                 subcategoryId:
 *                   type: integer
 *                   description: Slayderin aid olduğu alt kateqoriya ID-si
 *       400:
 *         description: Yanlış daxil edilmiş məlumat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: string
 *                   description: Xətanın açıqlaması
 *       500:
 *         description: Daxili server xətası
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Xətanın açıqlaması
 */

/**
 * @swagger
 * /slider:
 *   get:
 *     tags: 
 *       - Slayder
 *     summary: Bütün slayderləri əldə edin
 *     responses:
 *       200:
 *         description: Slayderlər uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Slayderin unikal ID-si
 *                   img:
 *                     type: string
 *                     description: Slayder şəkillərinin URL-ləri
 *                   category:
 *                     type: object
 *                     description: Kateqoriya məlumatları
 *                   subcategory:
 *                     type: object
 *                     description: Alt kateqoriya məlumatları
 *       500:
 *         description: Daxili server xətası
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Xətanın açıqlaması
 */

/**
 * @swagger
 * /slider/{id}:
 *   delete:
 *     tags: 
 *       - Slayder
 *     summary: Slayderi ID-ə görə silin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Silinəcək slayderin ID-si
 *     responses:
 *       200:
 *         description: Slayder uğurla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Müvəffəqiyyət mesajı
 *                 deletedSlider:
 *                   type: object
 *                   description: Silinmiş slayderin məlumatları
 *       404:
 *         description: Slayder tapılmadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Xətanın açıqlaması
 *       500:
 *         description: Daxili server xətası
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Xətanın açıqlaması
 */
const express = require('express');
const router = express.Router();

const { createSlider, getSliders, deleteSliderById } = require('../controllers/slider.controllers');

const auth = require('../middlewares/auth.middleware');

router.post('/', auth, createSlider);
router.get('/', getSliders);
router.delete('/:id', auth, deleteSliderById);

module.exports = router;
