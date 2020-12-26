'use strict'

const request = require('supertest')
const httpStatus = require('http-status')
const app = require('../src/index')
let server
describe('Application text routes', () => {

    beforeAll((done) => {
        server = app.listen(done)
    })

    afterAll((done) => {
        server.close(done)
    })
})