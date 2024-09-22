const createProduct = require("./createProduct");
const deleteProductById = require("./deleteProductById");
const editProduct = require("./editProduct");
const getDiscountedProducts = require("./getDiscountProduct");
const getProductById = require("./getProductById");
const getProducts = require("./getProducts");
const getProductsByCategory = require("./getProductsByCategory");
const getProductsBySubcategory = require("./getProductsBySubcategory");
const getTopSellingProducts = require("./getTopSelling");
const searchProduct = require("./searchProduct");


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProductById,
    searchProduct,
    getProductsByCategory,
    getProductsBySubcategory,
    getDiscountedProducts,
    getTopSellingProducts
};
