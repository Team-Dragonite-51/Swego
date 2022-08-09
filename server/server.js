const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express()
const PORT = 3000

app.use(express.json()) // built in middleware parsing incoming JSON requests and puts parsed data in req.body
app.use(cors());

const authR = require('./authenticationRouter');

// app.use(express.static(path.resolve(__dirname, "../dist/bundle.js")))


// app.get('/test', (req, res) => {
//     res.locals.test = "SWEGO";
//     res.status(200).json(res.locals.test);
// })

app.use('/auth', authR);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page does not exist.'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT} ...`)
  })

module.exports = app;