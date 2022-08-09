const { Pool, Client } = require('pg');

const connection_URI = process.env.DB_URL;

const pool = new Pool({
    connectionString: connection_URI
})

module.exports = {
    query: ((text, values, callback) => {
        console.log("executed query", callback)
        return poolquery(text, values, callback)
    })
}
