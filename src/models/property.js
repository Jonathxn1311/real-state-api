const db = require("../connection.js")
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/real-state')
const { Schema } = mongose

const propertySchema = new Schema({
    name: String,
    location: String,
    aviable: Boolean
})
const Model = mongoose.model('Property', propertySchema)