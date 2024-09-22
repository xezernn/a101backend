const login = require("./login");
const register = require("./register");
const verifyToken = require("./verifyToken");
const refreshToken = require("./refreshToken");
const admins = require("./admins");
const deleteAdmin = require("./deleteAdmin");
const editAdmin = require("./editAdmin");

module.exports = { login, register, verifyToken , refreshToken, admins, deleteAdmin, editAdmin};