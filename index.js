// const express =require('express');
// const bodyParser = require('body-parser');
//new way add type : module in package.json
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/posts',postRoutes);


const CONNECTION_URL = 'mongodb+srv://parth:parth123@clusterhack.the56.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT =process.env.PORT || 5000;
// extra parameters so that we don't get warnings
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port : ${PORT} and Database is connected`)))
    .catch((error) => console.log(error.message));

    //So we dont get warnings in console
mongoose.set('useFindAndModify',false);

