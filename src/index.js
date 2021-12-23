const express = require('express')
const mongoose = require('mongoose')
const { Property } = require('./models/property.js')
const app = express()


app.set("port", 3000)

app.get("/", (req, res) => {
    res.status(404)
    res.redirect("/properties")
})

app.get("/properties", (req, res) => {
    res.json({
        properties: Property.find({})
    })
})

app.get("/properties/:id", (req, res) => {
    const ReturnProperty = Property.find({_id: req.params.id})
    res.json({
        Property: ReturnProperty
    })
})

app.post("/property", (req, res) => {
    const {name, location, description, image} = req.query

    const NewProperty = new Property({
        name,
        location, 
        description,
        image
    })
    NewProperty.save()
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
