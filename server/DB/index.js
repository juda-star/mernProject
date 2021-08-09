const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MONGODBURL =process.env.MONGODBURL;

mongoose.connect(MONGODBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('mongodb connected ...'))
.catch(error=>{
    console.error('connection error' , error.massage);
})

module.exports = mongoose.connection;