const mongoose = require('mongoose')
// const { MongoMemoryServer } = require('mongodb-memory-server')
require('dotenv').config()
async function connect() {
    // const mongodb = new MongoMemoryServer()
    // await mongodb.start()
    // const mongo_URI = mongodb.getUri()
    // const db = await mongoose.connect(mongo_URI)
    const uri = process.env.MONGODB_URI
    mongoose.set('strictQuery', true)
    const db = await mongoose.connect(uri);
    console.log("Database Connected")
    return db


}

module.exports = connect