const categoryService = require('../services/categoryService');

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías', details: error.message });
    }
};

const createCategory = async (req, res) => {
    try {
        const newCategory = await categoryService.createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la categoría', details: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryService.deleteCategory(id);
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.status(200).json({ message: 'Categoría eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría', details: error.message });
    }
};

module.exports = {
    getCategories,
    createCategory,
    deleteCategory
};