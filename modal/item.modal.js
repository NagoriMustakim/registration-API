const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    productName: { type: String, require: true, unique: true },
    productBrand: { type: String, require: true },
    productType: { type: String, require: true },
    productSize: { type: Number, require: true },
    ProductStock: { type: Number, require: true },
    productPrice: { type: Number },
    firstname: { type: String },
})

module.exports = mongoose.model('items', itemSchema)