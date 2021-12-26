const mongoose = require('mongoose')
const Property = require('../models/property.js')

const realState = (req, res) => {
    res.end()
}

const getProperties = async (req, res) => {
    console.log("Se solicito ver todas las propiedades", {
        properties: await Property.find({})
    })
    res.json({
        properties: await Property.find({})
    }) 
}

const getPropertiesByCategory = async (req, res) => {
    const category = req.params.category
    const resObject = {
        category,
        properties: await Property.find({ category })
    }

    console.log('Se solicito ver la propiedades de categoria ', category)
    console.log(resObject)
    res.json(resObject)
}

const getPropertiesByCategoryAndName = async (req, res) => {
    const category = req.params.category
    const name = req.params.name    
    const resObject = {
        name,
        category,
        properties: await Property.find({ name, category })
    }
    console.log(`Se solicito la propiedad de categoria ${category} y nombre ${name}`)
    console.log(resObject)
    res.json(resObject)
    res.end()
}

const getPropertyById = (req, res) => {
    const query = Property.find({_id: req.params.id})
    query.exec((err, property) => {
        if(err){
            throw new Error('Error encontrando la propiedad')
        }
        res.json(property) 
        console.log("Propiedad encontrada", property)
    })  
}

const insertProperty = async (req, res) => {
    console.log("Request post a /property")
    
    const NewProperty = new Property()
    NewProperty.name = req.query.name
    NewProperty.location = req.query.location
    NewProperty.description = req.query.description
    NewProperty.category = req.query.category
    NewProperty.photos = req.query.photos

    NewProperty.save((err) => {
        if(err){
            throw new Error('Error creating the new property')
        } 
    })

    const query = await Property.find({ _id: NewProperty._id })
    res.set({ 
        'Content-Type': 'text/plain', 
        'Text-Length': '123' 
    })
    res.end('Inserted property: ' + JSON.stringify(query))
    console.log("Inserted property: ", query)
}

const deleteProperty = async (req, res) => {
    const query = {
        property: await Property.find({ _id: req.params.id })
    }

    console.log("Request delete a /property/:id")
    
    if(query.property.length === 0){
        res.send("La propiedad no existe")
        console.log("La propiedad no existe")
        return
    }
    
    console.log("Propiedad a eliminar: ", query)
    
    res.set({ 
        'Content-Type': 'text/plain', 
        'Text-Length': '123' 
    })
    res.send("Propiedad a eliminar: " + JSON.stringify(query))

    Property.deleteOne({ _id: req.params.id }, (err) => {
        if (err){
            res.end('An error ocurred while deleting the property')
            console.log('An error ocurred while deleting the property')
        } else {
            res.end('Property deleted correctly')
            console.log('Property deleted correctly')
        }
    })
}

const updatePropertyName = async (req, res) => {
    const _id = req.params.id
    const name = req.query.name
    const description = req.query.description
    const location = req.query.location
    const photos = req.query.phoyos
    const category = req.query.category

    const response = await Property.updateOne({ _id }, { $set: { name, description, location, photos, category } })
    res.json(response)
    console.log(response)
}


module.exports = {
    realState,
    getProperties,
    getPropertiesByCategory,
    getPropertiesByCategoryAndName,
    getPropertyById,
    insertProperty,
    deleteProperty,
    updatePropertyName
}