const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    storename: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    firstname: { type: String },
    lastname: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String }
})

module.exports = mongoose.model('user', userSchema)