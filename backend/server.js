const express =require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const colors =require('colors');
const useRoutes=require('./routes/userRoutes');
const chatRoutes=require('./routes/chatRoutes');
const{notFound,errorHandlers}=require('./middleware/errorMiddleware');
dotenv.config();

connectDB();
const app=express();
app.use(express.json());


app.use('/api/user',useRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandlers)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`.yellow.bold);
  });
  