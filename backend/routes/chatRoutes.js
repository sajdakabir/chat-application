const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {accessChat,fetchChats,createGroupChat,renameGroup,addToGroup,removeFromGroup}=require('../controllers/chatControllers');

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

router.route('/groupremove')
.put(protectRoute,removeFromGroup);

module.exports=router;