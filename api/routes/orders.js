const http = require("http");
const express = require("express");
const exp = require("constants");
const router= express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.get('/:order_id',(req,res,next) => {
    res.status(200).json({
        message: 'Order details',
        order_id: req.params.order_id
    });
});

router.post('/:product_id',(req,res,next) => {
    const id= req.params.product_id;
    res.status(201).json({
        message: `Order was created for ${id}`
    });
}); 



router.delete('/:order_id',(req,res,next) => {
    res.status(200).json({
        message: 'Order deleted',
        order_id: req.params.order_id
    });
});


module.exports= router;