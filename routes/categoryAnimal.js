const express = require('express');
const {response} = require("express");
const router = express.Router();
var url =  require('url');
const animalCategoryController = require('../controllers/categoryAnimalController');

router.get('/', (req, res) => {
    animalCategoryController.getAnimalCategoriesFromDB().then(animalCategories => {
        res.status(200).json(animalCategories[0]);
    })
})

router.get('/:animalCategory', (req, res) => {
    animalCategoryController.getAnimalCategoryByIdFromDB(req.params.animalCategory).then(animalCategory => {
        if (animalCategory[0].length == 0) {
            res.status(404).json({
                message: 'Animal category not found'
            })
        } else {
            res.status(200).json(animalCategory[0][0])
        }
    }).catch(err => {
        res.status(404).json({
            message: 'Animal category not found'
        })
        console.log(err);
    })
})

module.exports = router;