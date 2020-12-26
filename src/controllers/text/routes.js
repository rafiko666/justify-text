'use strict'
const express = require('express')

const routes = new express.Router()
const textController = require('.')

routes.route('/').post(textController.justifyText)

module.exports = routes
