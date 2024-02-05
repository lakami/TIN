const db = require('../util/database');

function getComments(product_id) {
    return db.execute('SELECT * FROM comments WHERE product_product_id = ?', [product_id]);
}

function createComment(product_id, user, info) {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return db.execute('INSERT INTO comments (product_product_id, user, info, date) VALUES (?, ?, ?, ?)', [product_id, user, info, date]);
}

function deleteComment(comment_id) {
    return db.execute('DELETE FROM comments WHERE comments_id = ?', [comment_id]);
}

function updateComment(comment_id, info) {
    return db.execute('UPDATE comments SET info = ? WHERE comments_id = ?', [info, comment_id]);
}

module.exports = {
    getComments,
    createComment,
    deleteComment,
    updateComment
}