const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, (err, db) => {
    if(err){
        console.log(`Ha ocurrido un error al conectarse a MongoDB ${err}`)
    } else {
        module.exports = db
    }

})
