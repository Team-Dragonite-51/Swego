const {Pool} = require('pg');

const PG_URI = 'postgres://lcnvdkgx:huLuCGWlnU2znQOWwB6yuyXYJ9I7w_NH@heffalump.db.elephantsql.com/lcnvdkgx';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
