const asyncHandler=require('express-async-handler');
const User = require('../models/userModel');
const { use } = require('../routes/userRoutes');
const generateToken=require('../config/generateToken');
const registerUser=asyncHandler(
    async(req,res)=>{
        const {name,email,password,profile}=req.body;
        if(!name || !email || !password){
            res.status(400);
            throw new Error("please enter all the feild");
        }

        const UserExists=await User.findOne({email});
        if(UserExists){
            res.status(400);
            throw new Error("User already exits");
        }

        const user=await User.create({
            name,
            email,
            password,
            profile
        });

        if(user){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                profile:user.profile,
                token:generateToken(user._id),
            });
        }else{
            res.status(400);
            throw new Error ('Faild to create the user');
        }
    }
);


const authUser=asyncHandler(
    async(req,res)=>{
        const {email,password}=req.body;
        const user=await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                profile:user.profile,
                token:generateToken(user._id),
            });
        }else{
            res.status(401);
            throw new Error('Invalid email or password');
        }
    }
);


const allUsers=asyncHandler(async(req,res)=>{
const keyword=req.query.search?{
    $or:[
        {name:{$regex:req.query.search,$options:'i'}},
        {email:{$regex:req.query.search,$options:'i'}},
    ],
}:{};
// console.log(keyword);
const users=await User.find(keyword).find({_id:{$ne:req.user._id}});
res.send(users);
});




module.exports={registerUser,authUser,allUsers};