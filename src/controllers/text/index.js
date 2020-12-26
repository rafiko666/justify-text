'use strict'
const textService = require('../../application/text')
const justifyTextCommand = require('./JustifyTextCommand')


const justifyTextC = textService.justifyTextService


const justifyText = justifyTextCommand({ justifyTextC })

const investController = Object.freeze({
    justifyText
})

module.exports = investController
