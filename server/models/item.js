const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema= new Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    image: String,
    price: Number,
    stock: Number,
    owner: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

let Item= mongoose.model('Item', itemSchema)

module.exports= Item