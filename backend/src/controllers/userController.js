const User = require('../models/user.model.js')

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are mandatory",
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: "User already exists",
                success: false
            })
        }
        const newUser = { name, email, password };
        const createUser = await new User(newUser);
        let createdUser = createUser.save();
        console.log("User created successfully")
        if (createdUser) {
            return res.status(401).json({
                message: "User created successfully",
                success: true
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required...",
                success: false
            })
        }
        const user = await User.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(401).json({
                message: "User does not exist",
                success: false
            })
        }
        if (user.password != password) {
            return res.status(401).json({
                message: "Invalid Credentials",
                success: false
            })
        }
        return res.status(201).session(req.session.user = user).json({
            message: "user logged in successfully",
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const Logout = (req, res) => {
    req.session.destroy();
    return res.json({
        message: " User logged out successfully..",
        success: true
    })
}
export const getMyProfile = async(req, res) =>{
      try {
        const id = req.params.id;
      const user = await User.findById(id).select("-password")
      return res.status(201).json({
        user
      })
      } catch (error) {
        console.log(error)
      }
}
export const bookmark = async (req, res) =>{
    try {
        const articleId = req.params.id;
    const loggedInUserId = req.body.id;
    const user = await User.findById(loggedInUserId)
    console.log(user)
    if(user.savedArticle.includes(articleId)){
        //remove
        await User.findByIdAndUpdate(loggedInUserId, { $pull:{ savedArticle: articleId}})
        return res.status(401).json({
            message:"article removed from your bookmarks"
        })
    }
    else{
        //add bookmark
        await User.findByIdAndUpdate(loggedInUserId, { $push:{savedArticle : articleId}})
        return res.status(401).json({
            message:"article added to your bookmarks"
        })
    }
    } catch (error) {
        console.log(error)
    }  
}
export const follow = async(req, res)=>{
   try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId)
    if(loggedInUser.following.contains(userId)){
        await User.findByIdAndUpdate(loggedInUserId, {$pull:{following: userId}})
        return res.status(201),json({
            message:"user unfollowed successfully"
        })
    }
    else{
        await User.findByIdAndUpdate(loggedInUserId, {$push:{following: userId}})
        return res.status(201),json({
            message:"user unfollowed successfully"
        }) 
    }
   } catch (error) {
    console.log(error)
   }

}
