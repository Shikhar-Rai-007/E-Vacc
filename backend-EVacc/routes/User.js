const express=require('express');
const Users = require('../models/Users');

const router=express.Router();

router.post('/UserLogin',(req,res)=>{
    const {dateofBirth,phoneNumber}=req.body;

    const currUser=Users.find({$and:[{dob:dateofBirth},{phNo:phoneNumber}]});
    if(!currUser){ return res.status(401).json({error:'Invalid User Credentials'});}
    console.log("User Logged In");
    console.log(currUser);
    res.json(currUser);
})


module.exports=router;