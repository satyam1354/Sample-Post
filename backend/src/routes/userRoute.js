const express = require('express')
const Router = express.Router();
const {Register, Login, Logout, getMyProfile, bookmark, follow} = require('../controllers/userController.js')

Router.route('/register').post(Register)
Router.route('/login').post(Login)
Router.route('/logout').get(Logout)
Router.route('/profile/:id').get(getMyProfile)
Router.route('/bookmark/:id').put(bookmark)
Router.route('/follow/:id').post(follow)

module.exports = userRoute;