const express = require('express');

const router = express.Router();

const ordersController = require('../controllers/ordersController');
const {getProductsInOrderFromDB} = require("../controllers/productsInOrderController");

router.get('/', (req, res) => {
    ordersController.getOrders().then(orders => {
        res.status(200).json(orders[0].map(order => {
            return {
                order_id: order.order_id,
                email: order.email,
                date: order.date
            }
        }));
    }).catch(err => {
        res.status(500).json({
            message: 'Something went wrong during fetching orders'
        })
        console.log(err);
    })
})

router.get('/:order_id', (req, res) => {
    getProductsInOrderFromDB(req.params.order_id)
        .then(products => {
            return products[0].map(product => {
                return {
                    product_id: product.product_product_id,
                    quantity: product.quantity
                }
            })
        })
        .then(products => {
            res.status(200).json(products);
        }).catch(err => {
        res.status(500).json({
            message: 'Something went wrong during fetching order\'s details'
        })
        console.log(err);
    })
})

router.post('/', (req, res) => {

    if (!req.body.email || !req.body.products) {
        res.status(400).json({
            message: 'Missing email or products'
        })
        return;
    }

    if (req.body.products.length == 0) {
        res.status(400).json({
            message: 'Invalid products, empty array'
        })
        return;
    }

    if(!req.body.products.every(product => product.product_id && product.quantity && Number.isInteger(product.quantity) && product.quantity > 0)) {
        res.status(400).json({
            message: 'Invalid products'
        })
        return;
    }

    if (!validateEmail(req.body.email)) {
        res.status(400).json({
            message: 'Invalid email'
        })
        return;
    }

    ordersController.createOrder(req.body.email, req.body.products)
        .then(order_id => {
            res.status(200).json({
                order_id: order_id
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Something went wrong'
            })
        });
})
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

module.exports = router;