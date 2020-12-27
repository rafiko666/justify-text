'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./controllers/router')
const httpStatus = require('http-status')
const helmet = require('helmet')
const error = require('./commons/middlewares/error')
const app = express()

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
})
app.use(helmet())
app.use('/api', routes)

app.use(error.handler)
// catch 404 and forward to error handler
app.use(error.notFound)


app.use((err, _req, res, _next) => {
    console.error(`uncaughtException error: ${err}`);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error'
    });
    process.exit(1);
  });
module.exports = app
