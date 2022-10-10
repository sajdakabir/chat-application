const asyncHandler=require('express-async-handler');
const Message=require('../models/messageModel');
const User = require('../models/userModel');
const Chat=require('../models/chatModel');

const sendMessage=asyncHandler(async(req,res)=>{
    const {content,chatId}=req.body;
    if(!content || !chatId){
        console.log('invalid data passed into request');
        return res.sendStatus(400);
    }

    var newMessage={
        sender:req.user._id,
        content:content,
        chat:chatId,
    };

    try {
        var message=await Message.create(newMessage);
        message=await message.populate('sender','name profile');
        message=await message.populate('chat');
        message=await User.populate(message,{
            path:'chat.users',
            select:' name profile email',
        });

        await Chat.findByIdAndUpdate(req.body.chatId,{
            latestMessage:message,
        });
        res.json(message);
        
    } catch (error) {
        res.status(400);
        throw new Error(err.message);
    }
});



const allMessages = asyncHandler(async (req, res) => {
    try {
      const messages = await Message.find({ chat: req.params.chatId })
        .populate("sender", "name profile email")
        .populate("chat");
      res.json(messages);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });


module.exports={sendMessage,allMessages};