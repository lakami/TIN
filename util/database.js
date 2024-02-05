const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    database: 'tin_final_project',
    password: 'password',
    decimalNumbers: true
});
module.exports = pool.promise();