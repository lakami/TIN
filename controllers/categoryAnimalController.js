const db = require('../util/database');

function getAnimalCategoriesFromDB() {
    return db.execute('SELECT * FROM category_animal');
}

function getAnimalCategoryByIdFromDB(category_animal_id) {
    return db.execute('SELECT * FROM category_animal WHERE category_id = ?', [category_animal_id]);
}

module.exports = {
    getAnimalCategoriesFromDB,
    getAnimalCategoryByIdFromDB
}