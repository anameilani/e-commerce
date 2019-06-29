const router= require('express').Router()
const userRoute= require('./user')
const itemRoute= require('./item')
const transactionRoute= require('./transaction')


router.use('/users', userRoute)
router.use('/items', itemRoute)
router.use('/transaction', transactionRoute)


module.exports= router