const express = require('express')
const db = require('./connection.js')
const app = express()


app.set("port", 3000)
app.set("MongoPort", 27017)

app.get("/", (req, res) => {
    res.status(404)
    res.redirect("/properties")
})

app.get("/properties", (req, res) => {
    res.json({
        properties: db.collection('properties').find({})
    })
})

app.get("/properties/:id", (req, res) => {

})

app.post("/property", (req, res) => {

})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
