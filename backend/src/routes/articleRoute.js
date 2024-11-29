const express = require('express')
const Router = express.Router();
const { createArticle, deleteArticle ,editArticle,authorAllArticles, getAllArticles, getArticle, getFollowingArticles} = require('../controllers/articleController.js')

Router.route('/create').post(createArticle)
Router.route('/delete/:id').get(deleteArticle)
Router.route('/editarticle/:id').get(editArticle)
Router.route('/authorarticles/:id').get(authorAllArticles)
Router.route('/getallarticles').get(getAllArticles)
Router.route('/getarticle').get(getArticle)
Router.route('/getfollowingarticles/:id').get(getFollowingArticles)

module.exports = Router; 
