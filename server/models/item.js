const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema= new Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    image: {
        type: String,
        required: [true, 'Image required']
    },
    price: {
        type: Number,
        required: [true, 'Price must be defined']
    },
    stock: {
        type: Number,
        required: [true, 'Stock must be defined']
    },
    owner: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, 'UserId must be definded']
    }
})

let Item= mongoose.model('Item', itemSchema)

module.exports= Item