const express = require('express');
const {response} = require("express");
const router = express.Router();
const productsRouter = require('./products');
const categoryRouter = require('./category');
const categoryAnimalRouter = require('./categoryAnimal');
const ordersRouter = require('./orders');
const commentsRouter = require('./comments');
var url =  require('url');

router.use('/orders', ordersRouter)
router.use('/products', productsRouter)
router.use('/category', categoryRouter)
router.use('/categoryAnimal', categoryAnimalRouter)
router.use('/comments', commentsRouter)

module.exports = router;