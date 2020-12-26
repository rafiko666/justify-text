'use strict'
const httpStatus = require('http-status')

class ApiError extends Error {
    constructor({message, errors, status = httpStatus.INTERNAL_SERVER_ERROR}) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errors = errors
        this.status = status
    }
}

exports.ApiError = ApiError