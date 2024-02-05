const db = require('../util/database');

function createOrder(email, products) {

    let promisesProductInDB = [];
    products.forEach(product => {
        promisesProductInDB.push(isProductInDB(product.product_id));
    });
    return Promise.all(promisesProductInDB).then(res => {
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return db.execute('INSERT INTO \`order\` (email, date) VALUES (?,?)', [email, date])
            .then(res => {
                let order_id = res[0].insertId;
                let promises = [];
                products.forEach(product => {
                    promises.push(db.execute(
                            'INSERT INTO products_in_order (order_order_id, product_product_id, quantity) VALUES (?, ?, ?)',
                            [order_id, product.product_id, product.quantity]
                        )
                    );
                });
                return Promise.all(promises).then(() => {
                    return order_id;
                });
            })
    })

}

function isProductInDB(product_id) {
    return db.execute('SELECT * FROM product WHERE product_id = ?', [product_id])
        .then(res => {
            let productIsInDB = res[0].length > 0;
            if (!productIsInDB) {
                throw new Error('Product not found');
            }
            return productIsInDB;
        });
}

function getOrders() {
    return db.execute('SELECT * FROM \`order\` ORDER BY date DESC');
}

module.exports = {
    createOrder,
    getOrders,
}