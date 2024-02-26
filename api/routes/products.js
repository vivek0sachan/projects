const express=require('express');
const router=express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
}
);

router.post('/',(req,res,next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:product_id',(req,res,next) => { // this is passing parameter in the url direcltly python example would be <int:productId>
    const id =req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });};
    }
);

module.exports=router;