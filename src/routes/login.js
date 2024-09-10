/**
 * @swagger
 * tags:
 *   name: Autentifikasiya
 *   description: İstifadəçi qeydiyyatı, giriş, token doğrulama, token yeniləmə və admin əməliyyatları.
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: 
 *       - Autentifikasiya
 *     summary: Yeni istifadəçi qeydiyyatdan keçirin
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: İstifadəçi adı
 *               password:
 *                 type: string
 *                 format: password
 *                 description: İstifadəçi şifrəsi
 *               role:
 *                 type: string
 *                 description: İstifadəçinin rolu ya ADMIN yada USER
 *     responses:
 *       201:
 *         description: İstifadəçi uğurla qeydiyyatdan keçdi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Akses token
 *                 refresh:
 *                   type: string
 *                   description: Yeniləmə tokeni
 *                 username:
 *                   type: string
 *                   description: İstifadəçi adı
 *       400:
 *         description: Bu istifadəçi adı artıq mövcuddur
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
 * /auth/login:
 *   post:
 *     tags: 
 *       - Autentifikasiya
 *     summary: İstifadəçi daxil olsun
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: İstifadəçi adı
 *               password:
 *                 type: string
 *                 format: password
 *                 description: İstifadəçi şifrəsi
 *     responses:
 *       200:
 *         description: İstifadəçi uğurla daxil oldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Akses token
 *                 refresh:
 *                   type: string
 *                   description: Yeniləmə tokeni
 *                 status:
 *                   type: boolean
 *                   description: Əməliyyatın uğurlu olub-olmaması
 *       401:
 *         description: Yanlış giriş məlumatları
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
 * /auth/refresh-token:
 *   post:
 *     tags: 
 *       - Autentifikasiya
 *     summary: Yeniləmə tokenini yeniləyin
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Yeniləmə tokeni
 *     responses:
 *       201:
 *         description: Yeniləmə tokeni uğurla yeniləndi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Yeni akses token
 *                 refresh:
 *                   type: string
 *                   description: Yeni yeniləmə tokeni
 *                 status:
 *                   type: boolean
 *                   description: Əməliyyatın uğurlu olub-olmaması
 *       401:
 *         description: Yeniləmə tokeni təqdim edilməyib
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Xətanın açıqlaması
 *       403:
 *         description: Yanlış yeniləmə tokeni
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
 * /auth/verify-token:
 *   get:
 *     tags: 
 *       - Autentifikasiya
 *     summary: Akses tokenini yoxlayın
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token uğurla doğrulandı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Token düzgündür
 *                 status:
 *                   type: boolean
 *                   description: Əməliyyatın uğurlu olub-olmaması
 *                 user_login:
 *                   type: string
 *                   description: İstifadəçi adı
 *       401:
 *         description: Yanlış və ya keçərsiz token
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
 * /auth/admin/{id}:
 *   delete:
 *     tags: 
 *       - Autentifikasiya
 *     summary: Admin istifadəçisini silin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Adminin ID-si
 *     responses:
 *       200:
 *         description: İstifadəçi müvəffəqiyyətlə silindi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mesaj:
 *                   type: string
 *                   description: Əməliyyatın uğurlu olub-olmaması
 *                 deleteUser:
 *                   type: object
 *                   description: Silinən istifadəçinin məlumatları
 *       403:
 *         description: Adminlərin silinməsinə yalnız super adminin icazəsi var
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Xətanın açıqlaması
 *       404:
 *         description: Belə istifadəçi yoxdur
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
 * /auth/admin/{id}:
 *   put:
 *     tags: 
 *       - Autentifikasiya
 *     summary: Admin parolunu dəyişin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Adminin ID-si
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Yeni parol
 *     responses:
 *       200:
 *         description: Parol uğurla dəyişdirildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Əməliyyatın uğurlu olub-olmaması
 *       403:
 *         description: Bu dəyişiklik yalnız super admin tərəfindən edilə bilər
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Xətanın açıqlaması
 *       404:
 *         description: Belə istifadəçi yoxdur
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
 * /auth/admins:
 *   get:
 *     tags: 
 *       - Autentifikasiya
 *     summary: Bütün adminləri alın
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bütün adminlər siyahısı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Admin ID-si
 *                   username:
 *                     type: string
 *                     description: Admin istifadəçi adı
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

const { register, login, verifyToken, refreshToken, admins, deleteAdmin, editAdmin } = require('../controllers/auth.controllers');
const auth = require('../middlewares/auth.middleware');
const validator = require('../middlewares/validation.middleware');

const authSchema = require('../schema/auth.schema');

router.post('/register', validator(authSchema), register);
router.post('/login', validator(authSchema), login);
router.post('/refresh-token', refreshToken);
router.get('/verify-token', auth, verifyToken);
router.delete('/admin/:id', auth, deleteAdmin);
router.put('/admin/:id', auth, editAdmin);
router.get('/admins', auth, admins);

module.exports = router;
