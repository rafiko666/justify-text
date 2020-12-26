'use strict'
const express = require('express')

const router = new express.Router()
const textRoutes = require('./text/routes')

router.use('/justify', textRoutes)

module.exports = router
