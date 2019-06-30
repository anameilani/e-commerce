const router= require('express').Router()
const itemController= require('../controllers/itemController')
const authentication= require('../middlewares/authenticate')
const image = require('../helpers/image')

router.get('/', itemController.findAll)
router.use(authentication)
router.get('/myitem', itemController.findAllwithId)
router.get('/details/:id', itemController.findOne)
router.post('/',image.multer.single('image'), image.sendUploadToGCS, itemController.create)
router.patch('/:id', itemController.updateItem)
router.patch('/updatestock/:id', itemController.updateStock)
router.delete('/:id', itemController.remove)

module.exports= router