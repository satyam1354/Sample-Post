const express = require('express')
const Router = express.Router();
const { createArticle, deleteArticle ,getAllArticles, getFollowingArticles} = require('../controllers/articleController.js')

Router.route('/create').post(createArticle)
Router.route('/delete/:id').get(deleteArticle)
Router.route('/getallarticles').get(getAllArticles)
Router.route('/getfollowingarticles/:id').get(getFollowingArticles)

module.exports = Router; 
