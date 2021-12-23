const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/real-state')
const { Schema } = mongoose

const propertySchema = new Schema({
    name: String,
    location: String,
    description: String,
    image: String
})
const Property = mongoose.model('Property', propertySchema)

module.exports = Property