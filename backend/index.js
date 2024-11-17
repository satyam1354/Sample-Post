const express = require('express')
const app = express()
const dotenv = require('dotenv')
const databaseConnection = require('./src/config/db.js')
const userRoute = require('./src/routes/userRoute.js')
const session = require('express-session')
app.use(session({
    secret:'AbortController',
    resave: false,
    saveUninitialized: true,
    cookie:{secure: false}
}));
dotenv.config({ path: '.env' })
databaseConnection();

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



//api
app.use('/api/v1/user', userRoute);

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