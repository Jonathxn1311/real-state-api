const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/real-state')
const { Schema } = mongoose

const Property = new Schema({
    name: String,
    location: String,
    description: String,
    image: String
})
 
module.exports = mongoose.model('Property', Property)