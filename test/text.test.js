'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const httpStatus = require('http-status');
const database = require('../src/database');
const jwt = require('jsonwebtoken')
const server = require('../src/index')
const User = require('../src/database').model
chai.use(chaiHttp);

describe('Users Tests', () => {
    before(async () => {
        try {
            await database.connect();
        } catch (error) {
            console.error(`Database error: ${error}`);
        }
    });

    describe('/POST token', () => {
        it('it should return OK', (done) => {
            const email = {
                email: 'rafik@rafik.com'
            };
            chai
                .request(server)
                .post('/api/token')
                .send(email)
                .end((err, res) => {
                    expect(res).to.have.status(httpStatus.OK);
                    expect(jwt.decode(res.body, process.env.KEY)).to.equals(email.email);
                    done();
                });
        });
        it('it should return BAD_REQUEST', (done) => {
            const wrongEmail = {
                email: 'rafik@rafik'
            };
            chai
                .request(server)
                .post('/api/token')
                .send(wrongEmail)
                .end((err, res) => {
                    expect(res).to.have.status(httpStatus.BAD_REQUEST);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.contain.keys('code', 'message');
                    expect(res.body.code).to.equals(httpStatus.BAD_REQUEST);
                    done();
                });
        });

    });
});