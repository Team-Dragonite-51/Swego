const db = require('../models/databaseModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const authController = {};

authController.activateJWT = async (req, res, next) => {
    // let username = res.locals.tokenUsername;
    // let hash = res.locals.hash;

    jwt.sign({
        data: 'hello, I am a token',
        foo: 'bar'
    }, 'secret', { expiresIn: 120 }, (err, token) => {
        if(err) {
            console.log(err);
            return next(err);
        }
        console.log(token);
        res.locals.officialToken = token;
        return next();
    });
}

authController.checkJWT = async (req, res, next) => {
    const { token } = await req.body;
    jwt.verify(token, 'secret', (err, decoded) => {
        console.log(decoded);
        res.locals.decodedToken = decoded;
    })
}

authController.signup = async (req, res, next) => {
    console.log('made it to signup controller');
    const { username, password } = req.body;
    if(!username || !password){
        console.log('you must provide a username and password');
        return next({message: {error: 'error'}});
    };
    const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    console.log(user.rows);
    if(user.rows <= 0){
        console.log('this is a new one');
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err){
                console.log('there was an error with the hashing');
                return next(err);
            }
            db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
            res.locals.returnSignup = 'signup-successful';
            return next();
        });
    } else {
        console.log('This username already exists');
        return next('error');
    }
}

authController.login = async (req, res, next) => {
    const { username, inputPassword } = req.body;
    let data = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    console.log(data);
    let dataHash = data.rows[0];
    const { password } = dataHash;
    if(data.rows <= 0){
    }
    bcrypt.compare(inputPassword, password, (err, response) => {
        if(err) {
            return next(err);
        }
        if(response === false){
            res.locals.elevenIfTrue = 0;
            console.log('incorrect');
        } else {
            res.locals.elevenIfTrue = 11;
            console.log('correct');
        }
        return next();
    });
}


module.exports = authController;
