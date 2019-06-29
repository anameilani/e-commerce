const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');
chai.use(chaiHttp);

const deleteUser= require('../helpers/deleteUser')

const expect = chai.expect;

// after(function(done) {
//     deleteUser()
//     .then(()=>{
//         done()
//     })
//     .catch(err=>{
//         done()
//     });
//   });

describe('Register function test', function(){
    //test register new user
    describe('POST /users/register', function(){
        it('should send an object with 201 status code', function(done) {
            chai
            .request(app)
            .post('/users/register')
            .send({name: 'Ana', email:'ana@mail.com', password: 'ana'})
            .then(function(res){
                // validate
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');

                //validation new user have been save to database
                expect(res.body).to.have.property('_id');
                expect(res.body).to.have.property('name');
                expect(res.body).to.have.property('email');
                expect(res.body).to.have.property('password');
                expect(res.body.name).to.equal('Ana')
                expect(res.body.email).to.equal('ana@mail.com')
                expect(res.body.password).to.not.be.eql('ana')

                done()
            })
            .catch(function(err){
                console.log(err)
            })
        })
    })
    //Test duplicate email
    describe('Duplicate email', function() {
        it('should throw an error when the email is duplicate', function(done) {
            chai
            .request(app)
            .post('/users/register')
            .send({name: 'Ana', email:'ana@mail.com', password: 'ana'})
            .then(function(res){
                // validate
                console.log(res.body.message)
                expect(res).to.have.status(500);
                expect(res.body).to.be.an('object');

                //validation new user error email has been used
                expect(res.body).to.have.property('message');
                done()
            })
            .catch(function(err){
                console.log(err)
            })
        })
    })

    //Test validate email
    describe('Validate email format', function() {
        it('should throw an error when the email is invalid format', function(done) {
            chai
            .request(app)
            .post('/users/register')
            .send({name: 'Ana', email:'anamail.com', password: 'ana'})
            .then(function(res){
                // validate
                expect(res).to.have.status(500);
                expect(res.body).to.be.an('object');

                //validation new user email input is not valid
                expect(res.body).to.have.property('message');
                done()
            })
            .catch(function(err){
                console.log(err)
            })
        })
    });
})


describe('Login function test', function(){
    describe('POST /users/login', function(){
        it('should send an object with 200 status code', function(done) {
            chai
            .request(app)
            .post('/users/login')
            .send({email: 'ana@mail.com', password: 'ana'})
            .then(function(res){
                console.log(res.body)
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('token');
                expect(res.body).to.have.property('name');
                expect(res.body).to.have.property('userId');
                done()
            })
            .catch(function(err){
                console.log(err)
            })
        })
       
    })
})
