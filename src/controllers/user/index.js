'use strict'
const userService = require('../../application/user')
const getTokenQuery = require('./GetTokenQuery')

const getTokenQ = userService.getTokenService

const getToken = getTokenQuery({getTokenQ})

const userController = Object.freeze({
    getToken
})

module.exports = userController
