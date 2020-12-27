'use strict'
const httpStatus = require('http-status')
const {ApiError} = require('../../commons/ApiError')
module.exports = function JustifyTextCommand({justifyTextC}) {
    return async(req, res, next) => {
        try {
            if (!req.header('authorization')) {
                throw new ApiError({
                    message: ' Unauthorized requested. Missing authentication header',
                    status: httpStatus.UNAUTHORIZED
                })
            }
            const token = req.header('authorization')
            const text = await justifyTextC(req.body, token)
            res.setHeader('content-type', 'text/plain')
            res.status(httpStatus.OK).send(text)
        } catch (error) {
            next(error)
        }

    }
}
