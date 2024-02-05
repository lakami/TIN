const express = require('express');
const {response} = require("express");
const router = express.Router();
var url =  require('url');
const categoryController = require('../controllers/categoryController');

router.get('/', (req, res) => {
    categoryController.getCategoriesFromDB().then(categories => {
        res.status(200).json(categories[0]);
    })
})

router.get('/:category', (req, res) => {
    categoryController.getCategoryByIdFromDB(req.params.category).then(category => {
        if (category[0].length == 0) {
            res.status(404).json({
                message: 'Category not found'
            })
        } else {
            res.status(200).json(category[0][0])
        }
    }).catch(err => {
        res.status(404).json({
            message: 'Category not found'
        })
        console.log(err);
    })
})

module.exports = router;

