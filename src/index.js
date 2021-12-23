const express = require('express')
const app = express()


app.set("port", 3000)

app.get("/", (req, res) => {
    res.status(200)
    res.end("Bienvenido a la real-state-api")
})

app.get("/properties", (req, res) => {
    res.json({
        properties: [
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           },
           {
            name: "Property 1",
            location: "Location 1",
            photo: "src/image/image1"
           }

        ]
    })
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
