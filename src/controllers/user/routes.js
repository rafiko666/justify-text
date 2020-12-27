'use strict'
const express = require('express')

const routes = new express.Router()
const userController = require('.')

routes.route('/').post(userController.getToken)

module.exports = routes
