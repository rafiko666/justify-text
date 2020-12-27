const Joi = require('@hapi/joi');

module.exports = {
    getToken: {
        body: Joi.object({
            email:Joi.string().email().lowercase().trim().required()
        })
    }
};