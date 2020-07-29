const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "vaenthan18",
    host : "localhost",
    port : "5432",
    database : "glide"
});

module.exports = pool;