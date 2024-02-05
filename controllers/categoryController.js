const db = require('../util/database');

function getCategoriesFromDB() {
    return db.execute('SELECT * FROM category');
}

function getCategoryByIdFromDB(category_id) {
    return db.execute('SELECT * FROM category WHERE category_id = ?', [category_id]);
}

module.exports = {
    getCategoriesFromDB,
    getCategoryByIdFromDB
}