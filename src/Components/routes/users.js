const express=require('express');
const user=express();
const bodyParser=require('body-parser');

user.use(bodyParser.urlencoded({extended:false}));

user.post('/user',(req,res)=>{
    
});