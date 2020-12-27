'use strict'
const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://rafik_tk:VdlFDYNzcBz4T8KE@mongo-test-vixki.mongodb.net/test?retryWrites=true"; 
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
    process.exit(-1);
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