'use strict'
const httpStatus = require('http-status')
const { ApiError } = require('../../commons/ApiError')
module.exports = function GetTokenQuery({ getTokenQ }) {
    return async (req, res, next) => {
        try {
            res.status(httpStatus.OK).send(await getTokenQ(req.body.email))
        } catch (error) {
            next(error)
        }

    }
}
