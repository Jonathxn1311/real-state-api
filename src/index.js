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
           
        ]
    })
})


app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
