const express = require('express')
const app = express()
product_routes= require('./api/routes/products')

app.use('/products',product_routes) // this is the middleware basically python prefix

console.log('Hello, Wrld!')
module.exports = app