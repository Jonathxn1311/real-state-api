const express = require('express')
const routes = require('./routes/routes.js')
const app = express()


app.set("port", 3000)
app.use(express.static(__dirname))

app.get("/", routes.realState )

app.get("/properties", routes.getProperties )

app.get('/:category', routes.getPropertiesByCategory )

app.get('/:category/:name', routes.getPropertiesByCategoryAndName )

app.get("/property/:id", routes.getPropertyById )

app.post("/property", routes.insertProperty )

app.delete('/property/:id', routes.deleteProperty)

app.put('/property/:id', routes.updateProperty )

app.listen(app.get("port"), () => {
    console.log(`Aplicacion escuchando por el puerto ${app.get("port")}`)
})
