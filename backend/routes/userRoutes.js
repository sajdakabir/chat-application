const express =require('express');
const {registerUser,authUser ,allUsers}=require('../controllers/userControllers');
const {protectRoute}=require('../middleware/authMiddleware');

const router=express.Router();


router.route('/')
.post(registerUser)
.get(protectRoute,allUsers);


router.route('/login').post(authUser);


module.exports=router;