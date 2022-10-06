const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {accessChat}=require('../controllers/chatControllers');

const router=express.Router();

router.route('/').post(protectRoute,accessChat);


module.exports=router;