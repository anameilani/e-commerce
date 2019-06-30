const chai = require('chai');
const chaiHttp = require('chai-http');

const app= require('../app')
chai.use(chaiHttp);

const expect = chai.expect;

var token=''



before(function(done){
        chai
        .request(app)
        .post('/users/login')
        .send({email: 'ana@mail.com', password: 'ana'})
        .then(function(res){
            console.log(res.body.token, "adaheuhaeufhaieufhaih")
            token= res.body.token
            done()
        })
        .catch(function(err){
            console.log("masuk error di test")
            console.log(err)
        })
})

describe('Test CRUD Transaction', function(){

    describe('Create transaction function test', function(){
        describe.only('POST /transaction', function(){
            it('should send an object with 201 status code', function(done) {
                console.log('masuk describe');
                console.log(token)
                chai
                .request(app)
                .post('/transaction')
                .send({userId:'5d10a8fb6776a53e8f8f12ed', itemId:'5d10ac4549ae974089eda01b', amount:1, price: 500000 })
                .set('token', token)
                .then(function(res){
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('_id');
                    expect(res.body).to.have.property('userId');
                    expect(res.body).to.have.property('itemId');
                    expect(res.body).to.have.property('amount');
                    expect(res.body).to.have.property('totalPrice');
                    expect(res.body).to.have.property('status');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })

        describe('POST /transaction invalid amount', function(){
            it('should send invalid input amount message', function(done){
                chai
                .request(app)
                .post('/transaction')
                .send({userId:'5d10a8fb6776a53e8f8f12ed', itemId:'5d10ac4549ae974089eda01b', amount:0 })
                .set('token', token)
                .then(function(res){
                    // validate
                    expect(res.body).to.be.an('object');
    
                    //validation error message
                    expect(res.body).to.have.property('message');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })

    describe('Get all item in transaction with specific userId and specific status transaction function test', function(){
        describe('GET /transaction/:status', function(){
            it('should send an array with 200 status code', function(done) {
                chai
                .request(app)
                .get('/transaction/not-paid')
                .set('token', token)
                .then(function(res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })


    describe('Update status transaction function test', function(){
        describe('PATCH /transaction/:id', function(){
            it('should send an object with 200 status code', function(done) {
                chai
                .request(app)
                .patch('/transaction/5d11e27efecc2028ceeb3b1d')
                .set('token', token)
                .send({status: 'paid'})
                .then(function(res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('_id');
                    expect(res.body).to.have.property('userId');
                    expect(res.body).to.have.property('itemId');
                    expect(res.body).to.have.property('amount');
                    expect(res.body).to.have.property('totalPrice');
                    expect(res.body).to.have.property('status');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })


    describe('Delete transaction function test', function(){
        describe('DELETE /transaction/:id', function(){
            it('should send an object with 200 status code', function(done) {
                chai
                .request(app)
                .delete('/transaction/5d10e733615966166c6840c9')
                .set('token', token)
                .then(function(res){
                    expect(res).to.have.status(200);
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })

        //validate item not found
        describe('Invalid DELETE /transaction/:id', function(){
            it('should send an object with 404 status code', function(done) {
                chai
                .request(app)
                .delete('/transaction/5d10ae25b1ed09422db555bb')
                .set('token', token)
                .then(function(res){
                    // validate
                    expect(res).to.have.status(404);
                    expect(res.body).to.be.an('object');

                    //validation error message
                    expect(res.body).to.have.property('message');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })
})