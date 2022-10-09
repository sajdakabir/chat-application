const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {accessChat,fetchChats,createGroupChat,renameGroup,addToGroup}=require('../controllers/chatControllers');

const router=express.Router();

router.route('/')
.post(protectRoute,accessChat)
.get(protectRoute,fetchChats)

router.route('/group')
.post(protectRoute,createGroupChat);

router.route('/rename')
.put(protectRoute,renameGroup);

router.route('/groupadd')
.put(protectRoute,addToGroup);

module.exports=router;