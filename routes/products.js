const express = require('express');
const {response} = require("express");
const router = express.Router();
var url =  require('url');
const productsController = require('../controllers/productsController');
const commentsController = require("../controllers/commentsController");

router.get('/', (req, res) => {

    if (req.query?.product_ids) {
        var product_ids = req.query.product_ids.split(',').map(x=> parseInt(x));
        productsController.getProductsForMainPageFromDB().then(products => {
            res.status(200).json(products[0].filter(product => product_ids.includes(product.product_id)).map(product => {
                return {
                    product_id: product.product_id,
                    name: product.name,
                    price: product.price,
                    weight: product.weight,
                    image_id: "images\\" + product.image_id
                }
            }));
        })
    } else {
        productsController.getProductsForMainPageFromDB().then(products => {
            res.status(200).json(products[0].map(product => {
                return {
                    product_id: product.product_id,
                    name: product.name,
                    price: product.price,
                    weight: product.weight,
                    image_id: "images\\" + product.image_id
                }
            }));
        })
    }


})

router.get('/category/:category', (req, res) => {
    productsController.getProductsForProductsPageByCategoryFromDB(req.params.category).then(products => {
        res.status(200).json(products[0].map(product => {
            return {
                product_id: product.product_id,
                name: product.name,
                price: product.price,
                weight: product.weight,
                image_id: "images\\" + product.image_id
            }
        }));
    })
})

router.get('/categoryAnimal/:categoryAnimal', (req, res) => {
    productsController.getProductsForProductsPageByAnimalCategoryFromDB(req.params.categoryAnimal).then(products => {
        res.status(200).json(products[0].map(product => {
            return {
                product_id: product.product_id,
                name: product.name,
                price: product.price,
                weight: product.weight,
                image_id: "images\\" + product.image_id
            }
        }));
    })
})

router.get('/:product_id/comments', (req, res) => {
    commentsController.getComments(req.params.product_id)
        .then(comments => {
        res.status(200).json(comments[0].map(comment => {
            return {
                comments_id: comment.comments_id,
                user: comment.user,
                date: comment.date,
                info: comment.info
            }
        }));
    }).catch(err => {
        res.status(500).json({
            message: 'Something went wrong during fetching comments'
        })
        console.log(err);
    })
})

router.get('/:product_id', (req, res) => {
    productsController.getProductDetailsFromDB(req.params.product_id).then(products => {
        if (products[0].length == 0) {
            res.status(404).json({
                message: 'Product not found'
            })
        } else {
            res.status(200).json(
                {
                    product_id: products[0][0].product_id,
                    name: products[0][0].name,
                    price: products[0][0].price,
                    weight: products[0][0].weight,
                    description: products[0][0].description,
                    image_id: "images\\" + products[0][0].image_id
                }
            )
        }
    }).catch(err => {
        res.status(404).json({
            message: err.message
        })
        console.log(err);
    })
})

module.exports = router;