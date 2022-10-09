const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {accessChat,fetchChats,createGroupChat}=require('../controllers/chatControllers');

const router=express.Router();

router.route('/')
.post(protectRoute,accessChat)
.get(protectRoute,fetchChats)

router.route('/group')
.post(protectRoute,createGroupChat);


module.exports=router;