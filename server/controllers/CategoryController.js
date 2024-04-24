const Category = require('../models/Category');

let categories = [];

const createCategory = (req, res) => {
    const { id, name } = req.body;
    const category = new Category(id, name);
    categories.push(category);
    res.status(201).json({ message: 'Category created successfully', category });
};

const updateCategory = (req, res) => {
    const categoryId = req.params.id;
    const { name } = req.body;
    const categoryIndex = categories.findIndex(category => category.id === categoryId);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }
    categories[categoryIndex].name = name;
    res.json({ message: 'Category updated successfully', category: categories[categoryIndex] });
};

const deleteCategory = (req, res) => {
    const categoryId = req.params.id;
    const categoryIndex = categories.findIndex(category => category.id === categoryId);
    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }
    if (categories[categoryIndex].products.length > 0) {
        return res.status(400).json({ message: 'Cannot delete category with associated products' });
    }
    categories.splice(categoryIndex, 1);
    res.json({ message: 'Category deleted successfully' });
};

const getAllCategories = (req, res) => {
    res.json(categories);
};

const getCategoryById = (req, res) => {
    const categoryId = req.params.id;
    const category = categories.find(category => category.id === categoryId);
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
};

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById
};
