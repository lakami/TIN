const db = require('../util/database');

function getProductsForMainPageFromDB() {
    return db.execute('SELECT product_id, name, price, weight, image_id FROM product');
}

function getProductsForProductsPageByCategoryFromDB(category_category_id) {
    return db.execute('SELECT product_id, name, price, weight, image_id FROM product WHERE category_category_id = ?', [category_category_id]);
}

function getProductsForProductsPageByAnimalCategoryFromDB(category_animal_category_id) {
    return db.execute('SELECT product_id, name, price, weight, image_id FROM product WHERE category_animal_category_id = ?', [category_animal_category_id]);
}

function getProductDetailsFromDB(product_id) {
    return db.execute('SELECT * FROM product WHERE product_id = ?', [product_id]);
}

module.exports = {
    getProductsForMainPageFromDB,
    getProductsForProductsPageByCategoryFromDB,
    getProductsForProductsPageByAnimalCategoryFromDB,
    getProductDetailsFromDB,
};
