'use strict'
const httpStatus = require('http-status')

module.exports = function JustifyTextCommand({ justifyTextC }) {
    return async (req, res, next) => {
        try {
            const invests = justifyTextC(req.body)
            res.setHeader('content-type', 'text/plain');
            res.status(httpStatus.OK).send(invests)
        } catch (error) {
            next(error)
        }

    }
}
