'use strict'
const app = require('./index')
const database = require('./database');
const port = process.env.PORT || 8080
database.connect();
app.listen(port)