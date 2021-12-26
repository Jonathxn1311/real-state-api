const express = require('express')
const mongoose = require('mongoose')
const Property = require('./models/property.js')
const app = express()


app.set("port", 3000)
app.use(express.static(__dirname))

app.get("/", (req, res) => {
    res.end()
})

app.get("/properties", async (req, res) => {
    console.log("Se solicito ver todas las propiedades")
    console.log({
        properties: await Property.find({})
    })
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
        console.log("Request a /property/:id")
        console.log("Propiedad encontranda")
        console.log({
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
        const property = Property.findOne({ name: req.query.name })
        res.end('Property inserted correctly')
        console.log("Request post a /property")
        console.log("Propiedad insertada: ")
        console.log({
            property
        })
    })
})

app.delete('/property/:id', (req, res) => {
    const property = Property.findOne({ _id: req.params.id })

    console.log("Request delete a /property/:id")
    console.log("Propiedad a eliminar: ")
    console.log({
        property
    })

    Property.deleteOne({ _id: req.params.id }, (err) => {
        if (err){
            res.end('An error ocurred while deleting the property')
            console.log('An error ocurred while deleting the property')
        } else {
            res.end('Property deleted correctly')
            console.log('Property deleted correctly')
        }
    })
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
