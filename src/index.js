const express = require('express')
const mongoose = require('mongoose')
const Property = require('./models/property.js')
const app = express()


app.set("port", 3000)
app.use(express.static(__dirname))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get("/properties", async (req, res) => {
    res.json({
        properties: await Property.find({})
    })
})

app.get("/property/:id", (req, res) => {
    const query = Property.findOne({_id: req.params.id})
    query.exec((err, property) => {
        if(err){
            throw new Error('Error encontrando la propiedad')
        }
        res.json({
            property
        })
    })
    
})

app.post("/property", (req, res) => {
    const NewProperty = new Property()
    NewProperty.name = req.query.name
    NewProperty.location = req.query.location
    NewProperty.description = req.query.description
    NewProperty.image = req.query.image

    NewProperty.save((err) => {
        if(err){
            throw new Error('Error creating the new property')
        } 
        res.end('Property inserted correctly')
    })
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
