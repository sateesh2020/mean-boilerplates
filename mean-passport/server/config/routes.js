var auth                = require('./auth'),
    userController      = require('../controllers/userController'),
    assesmentController = require('../controllers/assesmentController'),
    mongoose            = require('mongoose'),
    express             = require('express'),
    router              = express.Router();

module.exports = function (app) {
    // REGISTER OUR ROUTES ---------------
    // All of our routes will be prefixed with /api
    app.use('/api', router);
    // Route to handle all http requests
    router.get('/', function (req, res) {
        res.sendFile(__dirname + '/client/index.html'); // load our client/index.html file
    });
    router.post('/user', userController.addUser);
    router.post('/authenticate', auth.authenticate);
    router.post('/addNewAssesmemt',assesmentController.addNewAssesment);
    router.post('/getAssesment',assesmentController.getAssesment);
}