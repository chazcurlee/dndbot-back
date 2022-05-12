//////////// IMPORT /////////////
const router = require('express').Router()
const controller = require('../controllers/AuthController')

/////////// SET AUTHCONTROLLER ROUTES ////////////
router.post('/login', controller.Login)
router.post('/register', controller.Register)

///////// EXPORT /////////
module.exports = router