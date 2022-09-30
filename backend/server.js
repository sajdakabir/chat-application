const express =require('express');
const dotenv=require('dotenv');
const app=express();
dotenv.config();
const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
  });
  