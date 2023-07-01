const express = require('express')
const router = express.Router()
const itemController = require('../controller/itemController')
/**----GET METHOD----- */
router.route('/').get((req, res) => { res.send("item route") })
router.route('/health-check').get((req, res) => { res.send("OK") })
router.route('/getItem/:id').get(itemController.getItem)

/**----POST METHOD----- */
router.route('/additem').post(itemController.addItem)

/**----PUT METHOD----- */
router.route('/additem').post(itemController.updateItem)
/**----DELETE METHOD----- */
router.route('/additem').post(itemController.removeItem)

module.exports = router
