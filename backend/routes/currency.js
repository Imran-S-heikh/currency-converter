const express = require('express')
const router = express.Router()
const { ROLE } = require('../config/constant')
const AuthMiddleware = require('../middlewares/Authentication')
const CurrencyController = require('../controllers/currencyController')


// router.get('/', AuthMiddleware([ROLE.CUSTOMER, ROLE.SPONSOR, ROLE.OWNER]), CurrencyController.getItems);
router.get('/', CurrencyController.convertCurrency);

module.exports = router;