import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authroute from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err)
})

const app=express();

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});

app.use('/api/user',userRouter);
app.use('/api/auth',authroute);