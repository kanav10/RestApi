const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message : 'handling the get requests to /products',
    });
});

router.post('/', (req,res,next) => {
    res.status(201).json({
        message : 'handling post request to /products',
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message : 'you passed a special Id',
            id: id
        });
    } else {
        res.status(200).json({
            message : 'you passed an Id',
        });
    }

});

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message : 'updated product',
    });
});

router.delete('/:productId',(req,res,next)=>{

    res.status(200).json({
        message : 'deleted product',
    });
})


module.exports = router;