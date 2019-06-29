const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema= new Schema({
    userId:{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    itemId:{
        type: Schema.Types.ObjectId, 
        ref: 'Item'
    },
    amount: {
        type:Number,
        min : [1, 'not valid input amount']
    },
    totalPrice: Number,
    status: String
})

let Transaction= mongoose.model('transaction', transactionSchema)

module.exports= Transaction