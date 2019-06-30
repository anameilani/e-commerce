const Item= require('../models/item')

class itemController{

    static create(req, res, next){
        const newItem= new Item({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            stock: req.body.stock,
            owner: req.body.owner
        })

        newItem.save()
        .then(item=>{
            res.status(201).json(item)
        })
        .catch(next)
    }

    static findAll(req, res, next){
        Item.find({})
        .populate('owner')
        .then(items=>{
            res.status(200).json(items)
        })
        .catch(next)
    }

    static findAllwithId(req, res, next){
        console.log(req.decode, '======')
        Item.find({owner: req.decode.id})
        .then(items=>{
            res.status(200).json(items)
        })
        .catch(next)
    }

    static findOne(req, res, next){
        Item.findById(req.params.id)
        .populate('owner')
        .then(item=>{
            res.status(200).json(item)
        })
        .catch(next)
    }

    static updateItem(req, res, next){
        Item.findByIdAndUpdate(req.params.id, {price: req.body.price, stock: req.body.stock})
        .then(item=>{
            res.status(200).json(item)
        })
        .catch(next)
    }

    static updateStock(req, res, next){
       
        Item.findById(req.params.id)
        .then(item=>{
            let newStock= item.stock- req.body.amount
            return Item.findByIdAndUpdate(req.params.id, {stock: newStock})
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static remove(req, res, next){
        Item.findById(req.params.id)
        .then(item=>{
            if(item){
                Item.deleteOne({_id: item._id})
                .then(() =>{
                    res.status(200).json(item)
                })
                .catch(next)

            }else{
                throw {code: 404, message: 'Item Not Found'}
            }
        })
        .catch(next)
    }

}

module.exports= itemController