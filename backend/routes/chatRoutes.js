const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {accessChat,fetchChats}=require('../controllers/chatControllers');

const router=express.Router();

router.route('/')
.post(protectRoute,accessChat)
.get(protectRoute,fetchChats)


module.exports=router;