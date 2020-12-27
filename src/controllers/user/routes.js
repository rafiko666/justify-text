'use strict'
const express = require('express')
const { validate } = require('express-validation');
const validateConfig = { keyByField: true };
const routes = new express.Router()
const userController = require('.')
const {
    getToken
} = require('./validation');
routes.route('/').post(validate(getToken, validateConfig), userController.getToken)

module.exports = routes
