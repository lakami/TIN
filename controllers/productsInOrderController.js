const db = require('../util/database');

function getProductsInOrderFromDB(order_id) {
    return db.execute('SELECT * FROM products_in_order WHERE order_order_id = ?', [order_id]);
}

module.exports = {
    getProductsInOrderFromDB
}