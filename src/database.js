'use strict'
const mongoose = require('mongoose')
const mongoURI = process.env.DB_URI
const httpStatus = require('http-status')
const {ApiError} = require('./commons/ApiError')
mongoose.connection.on('connected', () => {
    // eslint-disable-next-line no-console
    console.info('Successfully conncted to database')
})
// Exit application on error
mongoose.connection.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error(`MongoDB connection error: ${err}`)
    throw new ApiError({
        message: ' MongoDB connection error',
        status: httpStatus.INTERNAL_SERVER_ERROR
    })
})

exports.connect = async() => {
    await mongoose.connect(mongoURI, {
        dbName : 'tictac',
        useNewUrlParser: true,
        useUnifiedTopology: true
        /* other options */
    })

    return mongoose.connection
}

exports.model = mongoose.model('text', {
    email : {type : String, default: ''},
    limit: {
        type: Number,
        default: 0,
        min: 0,
        max: 80000
    },
    Date : {
        type : Date,
        default: Date.now()
    }
}, 'text')