'use strict'
var jwt = require("jsonwebtoken");
let User = require('../../database').model
const httpStatus = require('http-status')
const { ApiError } = require('../../commons/ApiError')
module.exports = function GetTokent() {
    return async (email) => {
        let selector = { "email": email }
        let user = await User.findOne(selector)
        const token = jwt.sign(email, process.env.KEY);
        if (!user) {
            user = new User({ email: email, token: token });
            await user.save()
        }
        return token;
    }
}
