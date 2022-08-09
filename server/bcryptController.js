const db = require('./model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const bcryptController = {};

bcryptController.signup = async (req, res, next) => {
    const { username, password } = req.body;
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err) return next({message: { err: 'There was an error with the signup request'}});
            res.locals.hash = hash;
            db.query('INSERT INTO USERS (username, password) VALUES ($1, $2)', [username, hash]);
            return next();
        });

}

bcryptController.login = async (req, res, next) => {
    const { username, password } = await req.body;
    let data = await db.query('SELECT * FROM USERS WHERE username = $1', [username]);
    // await console.log(data);
    let userInfo = await data.rows[0];
    await bcrypt.compare(password, userInfo.password, (err, response) => {
        if(err) {
            return next(err);
        }
        if(response === false){
            res.locals.elevenIfTrue = 0;
        } else {
            res.locals.elevenIfTrue = 11;
        }
        return next();
    });
}


module.exports = bcryptController;
