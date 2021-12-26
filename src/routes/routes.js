const mongoose = require('mongoose')
const Property = require('./models/property.js')

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
    NewProperty.image = req.query.image

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

const portListenCallback = () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
}



module.exports = {
    realState,
    getProperties,
    getPropertyById,
    insertProperty,
    deleteProperty,
    portListenCallback
}