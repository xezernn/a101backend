/**
 * @swagger
 * tags:
 *   name: Kateqoriyalar
 *   description: Kateqoriya və Alt Kateqoriyalar üçün əməliyyatlar
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Yeni kateqoriya yaradın
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: Kateqoriya adı
 *     responses:
 *       201:
 *         description: Kateqoriya uğurla yaradıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Yaradılan kateqoriyanın ID-si
 *                 categoryName:
 *                   type: string
 *                   description: Kateqoriya adı
 *       400:
 *         description: Yanlış sorğu məlumatları
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 validaton_errors:
 *                   type: object
 *                   description: Xətalar haqqında məlumat
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
 * /categories:
 *   get:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Bütün kateqoriyaları alın
 *     responses:
 *       200:
 *         description: Bütün kateqoriyalar siyahısı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Kateqoriya ID-si
 *                   categoryName:
 *                     type: string
 *                     description: Kateqoriya adı
 *                   subcategory:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: Alt kateqoriya ID-si
 *                         categoryName:
 *                           type: string
 *                           description: Alt kateqoriya adı
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
 * /categories/{id}:
 *   get:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Kateqoriyanı ID-ə görə alın
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kateqoriya ID-si
 *     responses:
 *       200:
 *         description: Kateqoriya uğurla alındı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Kateqoriya ID-si
 *                 categoryName:
 *                   type: string
 *                   description: Kateqoriya adı
 *                 subcategory:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Alt kateqoriya ID-si
 *                       categoryName:
 *                         type: string
 *                         description: Alt kateqoriya adı
 *       400:
 *         description: Yanlış kateqoriya ID-si
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

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Kateqoriyanı yeniləyin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yenilənəcək kateqoriyanın ID-si
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: Yenilənəcək kateqoriya adı
 *     responses:
 *       200:
 *         description: Kateqoriya uğurla yeniləndi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Yenilənmiş kateqoriyanın ID-si
 *                 categoryName:
 *                   type: string
 *                   description: Yenilənmiş kateqoriya adı
 *       404:
 *         description: Kateqoriya tapılmadı
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

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Kateqoriyanı silin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Silinəcək kateqoriyanın ID-si
 *     responses:
 *       200:
 *         description: Kateqoriya uğurla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Müvəffəqiyyət mesajı
 *       404:
 *         description: Kateqoriya tapılmadı
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

/**
 * @swagger
 * /categories/subcategory:
 *   post:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Yeni alt kateqoriya yaradın
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: Alt kateqoriya adı
 *               categoryId:
 *                 type: integer
 *                 description: Əlaqəli kateqoriyanın ID-si
 *     responses:
 *       201:
 *         description: Alt kateqoriya uğurla yaradıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Yaradılan alt kateqoriyanın ID-si
 *                 categoryName:
 *                   type: string
 *                   description: Alt kateqoriya adı
 *       400:
 *         description: Yanlış sorğu məlumatları
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: object
 *                   description: Xətalar haqqında məlumat
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
 * /categories/subcategory/{id}:
 *   put:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Alt kateqoriyanı yeniləyin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Yenilənəcək alt kateqoriyanın ID-si
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 description: Yenilənəcək alt kateqoriya adı
 *     responses:
 *       200:
 *         description: Alt kateqoriya uğurla yeniləndi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Yenilənmiş alt kateqoriyanın ID-si
 *                 categoryName:
 *                   type: string
 *                   description: Yenilənmiş alt kateqoriya adı
 *       404:
 *         description: Alt kateqoriya tapılmadı
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

/**
 * @swagger
 * /categories/subcategory/{id}:
 *   delete:
 *     tags: 
 *       - Kateqoriyalar
 *     summary: Alt kateqoriyanı silin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Silinəcək alt kateqoriyanın ID-si
 *     responses:
 *       200:
 *         description: Alt kateqoriya uğurla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Müvəffəqiyyət mesajı
 *       404:
 *         description: Alt kateqoriya tapılmadı
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
const {
    createCategory,
    createSubcategory,
    editCategoriesById,
    getCategories,
    getCategoriesById,
    deleteCategoryById,
    updateSubcategory,
    deleteSubcategory
} = require('../controllers/categories.controllers');
const auth = require('../middlewares/auth.middleware');

const validator = require('../middlewares/validation.middleware');
const { categorySchema, subcategorySchema } = require('../schema/categories.schema');
const router = express.Router();

router.post('/', validator(categorySchema), auth, createCategory);
router.get('/', getCategories);
router.get('/:id', getCategoriesById);
router.put('/:id', validator(categorySchema), auth, editCategoriesById);
router.delete('/:id', auth, deleteCategoryById);

router.post('/subcategory', auth, createSubcategory);
router.put('/subcategory/:id', auth, updateSubcategory);
router.delete('/subcategory/:id', auth, deleteSubcategory);

module.exports = router;
