const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);


const app = require('../app');
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

describe('Function CRUD Item Test', function(){
    describe('Get all item function test', function(){
        describe('GET /items', function(){
            it('should send an array with 200 status code', function(done) {
                chai
                .request(app)
                .get('/items')
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
    
    describe('Get all item with specific owner function test', function(){
        describe('GET /items/:id', function(){
            it('should send an array with 200 status code', function(done) {
                chai
                .request(app)
                .get('/items/5d10a8fb6776a53e8f8f12ed')
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
    
    describe('Get details item function test', function(){
        describe('GET /items/details/:id', function(){
            it('should send an object with 200 status code', function(done) {
                chai
                .request(app)
                .get('/items/details/5d10ac4549ae974089eda01b')
                .set('token', token)
                .then(function(res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('id');
                    expect(res.body).to.have.property('name');
                    expect(res.body).to.have.property('image');
                    expect(res.body).to.have.property('price');
                    expect(res.body).to.have.property('stock');
                    done();
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })
    
    describe('Create item function test', function(){
        describe('POST /items', function(){
            it('should send an object with 201 status code', function(done) {
                chai
                .request(app)
                .post('/items')
                .set('token', token)
                .send({name: 'laptop', image:'https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg', price:'8000000', stock:'5', owner: '5d10a8fb6776a53e8f8f12ed'})
                .then(function(res){
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('_id');
                    expect(res.body).to.have.property('name');
                    expect(res.body).to.have.property('image');
                    expect(res.body).to.have.property('price');
                    expect(res.body).to.have.property('stock');
                    expect(res.body).to.have.property('owner');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })
    
    describe('Update item function test', function(){
        describe('PATCH /items/:id', function(){
            it('should send an object with 200 status code', function(done) {
                chai
                .request(app)
                .patch('/items/5d10ac4549ae974089eda01b')
                .set('token', token)
                .send({price: '8000000', stock:5})
                .then(function(res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('_id');
                    expect(res.body).to.have.property('name');
                    expect(res.body).to.have.property('image');
                    expect(res.body).to.have.property('price');
                    expect(res.body).to.have.property('stock');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })
    
    describe('Update stock item function test', function(){
        describe('PATCH /items/updatestock/:id', function(){
            it('should send an object with 200 status code', function(done) {
                chai
                .request(app)
                .patch('/items/updatestock/5d10ac4549ae974089eda01b')
                .set('token', token)
                .send({amount:2})
                .then(function(res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('_id');
                    expect(res.body).to.have.property('name');
                    expect(res.body).to.have.property('image');
                    expect(res.body).to.have.property('price');
                    expect(res.body).to.have.property('stock');
                    done()
                })
                .catch(function(err){
                    console.log(err)
                })
            })
        })
    })
    
    
    describe('Delete item function test', function(){
        describe('DELETE /items/:id', function(){
            it('should send an object with 200 status code', function(done) {
                chai
                .request(app)
                .delete('/items/5d10ae25b1ed09422db555bb')
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
        describe('Invalid DELETE /items/:id', function(){
            it('should send an object with 404 status code', function(done) {
                chai
                .request(app)
                .delete('/items/5d10ae25b1ed09422db555bb')
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



