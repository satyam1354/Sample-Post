const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default:""
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role:{
            type:String,
            enum:["reader","writer","admin"],
            default:"reader"
        },
        gender:{
            type:String,
            enum:['male', 'famale', 'Prefer not to say'],
            default:"Prefer not to say"
        },
        following:[],
        savedArticle:[],
        myReads:[],
    },
    {timestamps:true}
)

const User = mongoose.model('User', userSchema);
module.exports = User