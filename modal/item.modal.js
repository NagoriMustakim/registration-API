const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    productName: { type: String, require: true, unique: true },
    productBrand: { type: String, require: true },
    productType: { type: String, require: true },
    productSize: { type: String, require: true },
    ProductStock: { type: Number, require: true },
    productImage: { type: String, require: true },
    productPrice: { type: Number },
})

module.exports = mongoose.model('items', itemSchema)