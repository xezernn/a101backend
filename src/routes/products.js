/**
 * @swagger
 * tags:
 *   name: Məhsullar
 *   description: Məhsullarla bağlı əməliyyatlar
 */

/**
 * @swagger
 * /products:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Bütün məhsulları əldə edin
 *     responses:
 *       200:
 *         description: Məhsullar uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
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
 * /products:
 *   post:
 *     tags: 
 *       - Məhsullar
 *     summary: Yeni məhsul yaradın
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Məhsulun adı
 *               isTopSelling:
 *                   type: boolean
 *                   description: Əməliyyatın tvgybhjn
 *               price:
 *                 type: number
 *                 description: Məhsulun qiyməti
 *               discount:
 *                 type: integer
 *                 description: Məhsulun endirim faizi
 *               img:
 *                 type: array
 *                 description: Məhsulun şəkilləri (array şəklində)
 *                 items:
 *                   type: string
 *                   format: url
 *                   description: Şəklin URL-i
 *               categoryId:
 *                 type: integer
 *                 description: Məhsulun kateqoriyası ID-si
 *               subcategoryId:
 *                 type: integer
 *                 description: Məhsulun alt kateqoriyası ID-si
 *               description:
 *                 type: string
 *                 description: Məhsulun təsviri
 *               metadata:
 *                 type: string
 *                 description: Məhsulun əlavə məlumatları
 *     responses:
 *       201:
 *         description: Məhsul uğurla yaradıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: Əməliyyatın statusu
 *                 product:
 *                   type: object
 *                   description: Yaradılan məhsul
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
 * /products/discounted:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Ən çox endirimli ilk 20 məhsul.
 *     responses:
 *       200:
 *         description: Endirimli məhsullar uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
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
 * /products/populyar:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Ən çox satılan məhsulları əldə edin
 *     responses:
 *       200:
 *         description: Ən çox satılan məhsullar uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
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
 * /products/search:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Məhsul axtarın
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Axtarış üçün məhsulun adı
 *     responses:
 *       200:
 *         description: Məhsul(lar) uğurla tapıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
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
 * /products/{id}:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Məhsulun ID-si ilə məhsulu əldə edin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Məhsulun unikal ID-si
 *     responses:
 *       200:
 *         description: Məhsul uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
 *       404:
 *         description: Məhsul tapılmadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
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
 * /products/{id}:
 *   put:
 *     tags: 
 *       - Məhsullar
 *     summary: Məhsulu redaktə edin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Redaktə olunacaq məhsulun ID-si
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
 *     responses:
 *       200:
 *         description: Məhsul uğurla redaktə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Məhsulun unikal ID-si
 *                 name:
 *                   type: string
 *                   description: Məhsulun adı
 *       404:
 *         description: Məhsul tapılmadı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
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
 * /products/{id}:
 *   delete:
 *     tags: 
 *       - Məhsullar
 *     summary: Məhsulu silin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Silinəcək məhsulun ID-si
 *     responses:
 *       200:
 *         description: Məhsul uğurla silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Müvəffəqiyyət mesajı
 *       404:
 *         description: Məhsul tapılmadı
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
 * /products/category/{id}:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Kateqoriyasına görə məhsulları əldə edin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Kateqoriyanın ID-si
 *     responses:
 *       200:
 *         description: Məhsullar uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
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
 * /products/subcategory/{id}:
 *   get:
 *     tags: 
 *       - Məhsullar
 *     summary: Alt kateqoriyasına görə məhsulları əldə edin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Alt kateqoriyanın ID-si
 *     responses:
 *       200:
 *         description: Məhsullar uğurla əldə olundu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                      id:
 *                        type: integer
 *                        description: Məhsulun unikal ID-si
 *                      name:
 *                        type: string
 *                        description: Məhsulun adı
 *                      isTopSelling:
 *                         type: boolean
 *                         description: Əməliyyatın tvgybhjn
 *                      price:
 *                         type: number
 *                         description: Məhsulun qiyməti
 *                      discount:
 *                         type: integer
 *                         description: Məhsulun endirim faizi
 *                      img:
 *                         type: array
 *                         description: Məhsulun şəkilləri (array şəklində)
 *                         items:
 *                           type: string
 *                           format: url
 *                           description: Şəklin URL-i
 *                      categoryId:
 *                         type: integer
 *                         description: Məhsulun kateqoriyası ID-si
 *                      subcategoryId:
 *                         type: integer
 *                         description: Məhsulun alt kateqoriyası ID-si
 *                      description:
 *                         type: string
 *                         description: Məhsulun təsviri
 *                      metadata:
 *                         type: string
 *                         description: Məhsulun əlavə məlumatları
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

const { createProduct, getProducts, getProductById, editProduct, deleteProductById, searchProduct, getProductsByCategory, getProductsBySubcategory, getDiscountedProducts, getTopSellingProducts } = require('../controllers/products.controllers');

const auth = require('../middlewares/auth.middleware');

router.get('/', getProducts);
router.post('/', auth, createProduct);
router.get('/discounted', getDiscountedProducts);

router.get('/populyar', getTopSellingProducts);
router.get('/search', searchProduct);

router.get('/:id', getProductById);
router.put('/:id', auth, editProduct);
router.delete('/:id', auth, deleteProductById);

router.get('/category/:id', getProductsByCategory);
router.get('/subcategory/:id', getProductsBySubcategory);

module.exports = router;
