const Transaction= require('../models/transaction')


class transactionController{

    static create(req, res, next){
        console.log(req.decode,'=====')
        let newTransaction= new Transaction({
            userId: req.body.userId,
            itemId: req.body.itemId,
            amount: req.body.amount,
            totalPrice: req.body.amount * req.body.price,
            status: 'not-paid'
        })

        newTransaction.save()
        .then(transaction=>{
            res.status(201).json(transaction)
        })
        .catch(next)
    }

    static findAll(req, res, next){
        console.log('masuk find transaction')
        Transaction.find({userId: req.params.id, status: req.params.status})
        .populate('userId')
        .populate('itemId')
        .then(transactions=>{
            
            res.status(200).json(transactions)
        })
        .catch(next)
    }

    static update(req, res, next){
        console.log(req.params.id)
        Transaction.findByIdAndUpdate(req.params.id, {[req.body.field]: req.body.value})
        .then(transaction=>{
            res.status(200).json(transaction)
        })
        .catch(next)
    }

    static remove(req, res, next){
        Transaction.findById(req.params.id)
        .then(transaction=>{
            if(transaction){
                Transaction.deleteOne({_id: transaction._id})
                .then(() =>{
                    res.status(200).json(transaction)
                })
                .catch(next)

            }else{
                throw {code: 404, message: 'Transaction Not Found'}
            }
        })
        .catch(next)
    }

    

}

module.exports= transactionController