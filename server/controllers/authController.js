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
    const { username, password } = await req.body;
    if(!username || !password) res.status(422).send({error: 'You must provide an email and a password.'});

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) return next({message: { err: 'There was an error with the signup request'}});
        db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash])
            .then(() => {
                res.locals.tokenUsername = username;
                res.locals.tokenHash = hash;
            })
            .then(() => {return next()})
            .catch((err) => {return next(err);})
    });
}

authController.login = async (req, res, next) => {
    const { username, password } = await req.body;
    let data = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    // await console.log(data);
    let userInfo = await data.rows[0];
    await bcrypt.compare(password, userInfo.password, (err, response) => {
        if(err) {
            return next(err);
        }

        res.locals.tokenUsername = username;
        res.locals.hash = userInfo.password;

        if(response === false){
            res.locals.elevenIfTrue = 0;
        } else {
            res.locals.elevenIfTrue = 11;
        }
        return next();
    });
}


module.exports = authController;
