'use strict'
const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const { ApiError } = require('../ApiError')

const handler = (err, req, res, next) => {
    if (!(err instanceof ApiError) &&
        !(err instanceof expressValidation.ValidationError)) {
        next(err)
        //Go crash
    }
    if (err instanceof expressValidation.ValidationError) {
        const { details: message } = err;
        err = new ApiError({
          message,
          stack: err.stack,
          errors: err.errors,
          status: httpStatus.BAD_REQUEST
        });
      }
    const response = {
        code: err.status,
        errors: err.errors,
        message: err.message || httpStatus[err.status],
    }

    if (err.status) {
        res.status(err.status)
    } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR)
    }
    res.json(response)
}

exports.handler = handler

exports.notFound = (req, res) => {
    const err = new ApiError({
        message: 'Not Found',
        status: httpStatus.NOT_FOUND
    })

    return handler(err, req, res)
}