const { Pool } = require('pg');
require('dotenv').config();

const connection_URI = process.env.DB_URL;

const pool = new Pool({
    connectionString: connection_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log("executed query", callback);
        return pool.query(text, params, callback);
    }
}
