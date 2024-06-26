const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    sellingCount: {
        type: Number,
        required: true,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
