const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true })
    .then(()=> console.log('MongoDb connected'))
    .catch(error => console.log(error))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api/auth',authRoutes)


module.exports = app