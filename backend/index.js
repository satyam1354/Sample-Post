const express = require('express')
const app = express()   
// const dotenv = require('dotenv')   
const databaseConnection = require('./src/config/db.js')    
const userRoute = require('./src/routes/userRoute.js')  
const articleRoute = require('./src/routes/articleRoute.js') 
const apiNewsRoute = require('./src/routes/apiNewsRoutes.js') 
  
const session = require('express-session')             
app.use(session({
    secret: 'AbortController',  
    resave: false,      
    saveUninitialized: false,  
    cookie: { secure: false }  
}));
// dotenv.config({ path: '.env' })
databaseConnection();  

//middlewares
app.use(express.urlencoded({ extended: true }))   
app.use(express.json())
  
//api
app.use('/api/v1/user', userRoute);
app.use('/api/v1/article', articleRoute);
app.use('/api/v1/news', apiNewsRoute)
app.use(express.static('./public')) 
app.use(express.static('./public/reader'))
app.use(express.static('./public/writer'))
app.use(express.static('./public/image'))

app.get('/home', (req, res) => {
    res.status(200).json({
        message: "we are on home page",
        status: true
    })
})

app.listen(3000, (err) => {
    if (err) console.log(err)
    else console.log("server is listening at port no 3000.....")
})