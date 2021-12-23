const express = require('express')
const mongoose = require('mongoose')
const Property = require('./models/property.js')
const app = express()


app.set("port", 30100)

app.get("/", (req, res) => {
    
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
        res.json({
            property: Property.find({ name: req.query.name })
        })
    })
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
