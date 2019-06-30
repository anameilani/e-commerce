const router= require('express').Router()
const transactionController= require('../controllers/transactionController')
const authencation= require('../middlewares/authenticate')

// router.use(authencation)
router.get('/:id/:status', transactionController.findAll)
router.post('/', transactionController.create)
router.patch('/:id', transactionController.update)
router.delete('/:id', transactionController.remove)

module.exports= router