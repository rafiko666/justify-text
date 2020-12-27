'use strict'
const jwt = require('jsonwebtoken')
const User = require('../../database').model
module.exports = function GetTokent() {
    return async(email) => {
        const selector = {email : email}
        let user = await User.findOne(selector)
        const token = jwt.sign(email, process.env.KEY)
        if (!user) {
            user = new User({email, token})
            await user.save()
        }
        return token
    }
}
