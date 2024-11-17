const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config({ path: '/.env'})

const  databaseConnection = ()=>{
mongoose.connect('mongodb+srv://sam123:sam123@cluster0.qzdpg.mongodb.net/dariyaPost').then(()=>{
    console.log("you are connected to database")
}).catch((error)=>{
    console.log(error)
})
}
module.exports = databaseConnection