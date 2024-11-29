const express = require('express')
const Router = express.Router();
const {apiNews} = require('../controllers/apiController.js')

Router.route('/').get(apiNews);

module.exports = Router;