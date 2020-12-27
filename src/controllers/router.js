'use strict'
const express = require('express')

const router = new express.Router()
const textRoutes = require('./text/routes')
const userRoutes = require('./user/routes')

router.use('/justify', textRoutes)
router.use('/token', userRoutes)

module.exports = router
