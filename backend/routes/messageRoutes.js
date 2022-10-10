const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {sendMessage,allMessages}=require('../controllers/messageControllers');


const router=express.Router();

router.route('/')
.post(protectRoute,sendMessage);

router.route('/:chatId')
.get(protectRoute,allMessages);


module.exports=router;