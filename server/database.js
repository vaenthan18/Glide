const Pool = require('pg').Pool;

const pool = new Pool({
    user : "admin",
    password : "development",
    host : "localhost",
    port : 5432,
    database : "glide"
});

module.exports = pool;