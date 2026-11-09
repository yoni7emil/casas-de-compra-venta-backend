const Product = require('../models/productModel');

// Obtener todos los productos incluyendo los datos de la categoría y el vendedor
const getAllProducts = async () => {
    return await Product.find()
        .populate('category_id', 'name slug')
        .populate('seller_id', 'name email phone location');
};

// Obtener un producto por su ID con populate
const getProductById = async (id) => {
    return await Product.findById(id)
        .populate('category_id', 'name slug')
        .populate('seller_id', 'name email phone location');
};

// Crear un nuevo producto
const createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
};

// Actualizar un producto existente
const updateProduct = async (id, updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
        .populate('category_id', 'name slug')
        .populate('seller_id', 'name email phone location');
};

// Eliminar un producto
const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};