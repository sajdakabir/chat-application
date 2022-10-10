const express=require('express');
const {protectRoute}=require('../middleware/authMiddleware');
const {sendMessage}=require('../controllers/messageControllers');


const router=express.Router();

router.route('/')
.post(protectRoute,sendMessage);



module.exports=router;