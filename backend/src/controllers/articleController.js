const Article = require('../models/article.model.js')
const User = require('../models/user.model.js')

const createArticle = async (req, res) => {
    try {
        // console.log(req.body)
        const { title, summary, content, tags, author, authorName } = req.body;
        if (!title || !summary || !content || !tags || !author || !authorName) {
            return res.status(401).json({
                message: "All fields are mandatory",
                success: false
            })
        }
        const obj = { title, summary, content, tags, author, authorName };
        const createArticle = new Article(obj);
        const articleCreated = await createArticle.save();

        //console.log(articleCreated)
        return res.status(201).json({
            message: "Article created successfully...",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
const editArticle = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findById(id);
        if (article) {
            return res.status(200).json({
                article: article,
                success: true
            })
        }
    } catch (error) {
        console.log(error)
    }
}
const deleteArticle = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findByIdAndDelete(id);
        if (article) {
            console.log("article deleted successfully")
            return res.status(200).json({
                message: "Article deleted successfully...",
                success: true
            })
        }
    } catch (error) {
        console.log(error)
    }
}
const authorAllArticles = async (req, res) => {
    try {
        const id = req.params.id;
        const articles = await Article.find({ author: id });
        return res.status(200).json({
            articles: articles,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        //console.log(articles)
        return res.status(200).json({
            articles: articles
        })
    } catch (error) {
        console.log(error)
    }
}
const getArticle = async (req, res) => {
    try {
        const id = req.query.id;
       // console.log(id)
        const article = await Article.findById(id);
        //console.log(article)
        return res.status(200).json({
            article: article
        })
    } catch (error) {
        console.log(error)
    }
}
const getFollowingArticles = async (req, res) => {
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const followingUserArticle = await Promise.all(loggedInUser.following.map((e) => {
            return Article.find({ author: e });
        }))
        return res.status(200).json({
            atricles: followingUserArticle
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createArticle,
    deleteArticle,
    editArticle,
    authorAllArticles,

    getAllArticles,
    getArticle,
    getFollowingArticles,

}