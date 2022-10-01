const express =require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const colors =require('colors');
dotenv.config();

connectDB();
const app=express();


const port = process.env.PORT || 3001;



app.listen(port, () => {
    console.log(`Server is up on port ${port}!`.yellow.bold);
  });
  