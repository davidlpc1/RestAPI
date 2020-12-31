const express = require('express');
const router = express.Router();

//List all requests
router.get('/',(req,res, next) => {
    res.status(200).send({
        mensage:'Return requests'
    })
})

//Create an requests
router.post('/',(req,res, next) => {
    res.status(201).send({
        mensage:'Request ha been created'
    })
})

//List one requests
router.get('/:request_id',(req,res, next) => {
    const id = req.params.request_id

    res.status(200).send({
        mensage:'Request details',
        id
    })
})

//Delete an requests
router.delete('/',(req,res, next) => {
    res.status(200).send({
        mensage:'Delete request'
    })
})

module.exports = router;