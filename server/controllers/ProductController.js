const Product = require('../models/Product');
const Category = require('../models/Category');

let products = [];

const createProduct = (req, res) => {
    const { name, price, stock, sellingCount, categoryId } = req.body;
    const product = new Product(generateProductId(), name, price, stock, sellingCount, categoryId);
    const category = categories.find(category => category.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    category.products.push(product);
    products.push(product);
    res.status(201).json({ message: 'Product created successfully', product });
};

const updateProduct = (req, res) => {
    const productId = req.params.id;
    const { name, price, stock, sellingCount, categoryId } = req.body;
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    products[productIndex] = { id: productId, name, price, stock, sellingCount, categoryId };
    const category = categories.find(category => category.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    const productInCategoryIndex = category.products.findIndex(product => product.id === productId);
    if (productInCategoryIndex !== -1) {
        category.products[productInCategoryIndex] = products[productIndex];
    }
    res.json({ message: 'Product updated successfully', product: products[productIndex] });
};

const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    const categoryId = products[productIndex].categoryId;
    const category = categories.find(category => category.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    const productInCategoryIndex = category.products.findIndex(product => product.id === productId);
    if (productInCategoryIndex !== -1) {
        category.products.splice(productInCategoryIndex, 1);
    }
    products.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully' });
};

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const productId = req.params.id;
    const product = products.find(product => product.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductById
};
