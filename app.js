const express = require('express')
const app = express()
product_routes= require('./api/routes/products')
order_routes= require('./api/routes/orders')
const morgan =require('morgan')

app.use(morgan('dev'));

app.use('/products',product_routes) // this is the middleware basically python prefix
app.use('/orders',order_routes) 

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message,

        }
    });
}
);
console.log('Hello, Wrld!')
module.exports = app