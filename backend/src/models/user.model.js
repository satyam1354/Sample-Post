const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: ""
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
        role: {
            type: String,
            enum: ["reader", "writer", "admin"],
            default: "reader"
        },
        profile: {
            bio: { type: String },
            profile: { type: String }
        },
        gender: {
            type: String,
            enum: ['male', 'famale', 'Prefer not to say'],
            default: "Prefer not to say"
        },

        following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  //users the user is following 
        savedArticle: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
        myReads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],

        myArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],  //only used by writers
        follower: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],   //followers for writers
        // Admin-specific fields
        managedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users managed by the admin
    },
    { timestamps: true }
)

const User = mongoose.model('User', userSchema);
module.exports = User