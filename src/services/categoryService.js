const Category = require('../models/categoryModel');

// Obtener todas las categorías activas o la lista completa
const getAllCategories = async () => {
    return await Category.find();
};

// Crear una nueva categoría
const createCategory = async (categoryData) => {
    const category = new Category(categoryData);
    return await category.save();
};

// Eliminar una categoría por ID
const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory
};