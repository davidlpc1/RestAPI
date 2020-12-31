const express = require('express');
const router = express.Router();

//List all products
router.get('/',(req,res, next) => {
    res.status(200).send({
        mensage:'Return products'
    })
})

//Create an product
router.post('/',(req,res, next) => {
    res.status(201).send({
        mensage:'Product has been created'
    })
})

//List one product
router.get('/:product_id',(req,res, next) => {
    const id = req.params.product_id

    if(id === "special"){

        res.status(200).send({
            mensage:`You found the special product`,
            id,
        })
    }else{
        res.status(200).send({
            mensage:`Using GET product route of product: ${id}`,
            id
        })
    }
})

//Update an product
router.patch('/',(req,res, next) => {
    res.status(201).send({
        mensage:'Update product'
    })
})

//Delete an product
router.delete('/',(req,res, next) => {
    res.status(201).send({
        mensage:'Delete product'
    })
})

module.exports = router;