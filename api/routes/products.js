const express=require('express');
const router=express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
}
);

router.post('/:product_id',(req,res,next) => {
    const id= req.params.product_id;
    res.status(201).json({
        message: `posting request for id ${id} `
    });
});

router.get('/:product_id',(req,res,next) => { // this is passing parameter in the url direcltly python example would be <int:productId>
    const id =req.params.product_id;
    if(id==='special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    }
    else {
        res.status(400).json({
            message: 'You passed an invalid ID',
            id:id
        });
    }
    }
);

router.patch('/:product_id',(req,res,next) => {
    res.status(200).json({
        message: 'product updated!'
    });
});

router.delete('/:product_id',(req,res,next) => {
    res.status(200).json({
        message: 'product! deleted!'
    });
});


module.exports=router;
