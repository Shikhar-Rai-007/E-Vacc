const express=require('express');
const Users = require('../models/Users');

const router=express.Router();

router.post('/UserLogin',(req,res)=>{
    const {dob,phNo}=req.body;

    const currUser=Users.find({$and:[{dob:dob},{phNo:phNo}]});
    if(!currUser){ return res.status(401).json({error:'Invalid User Credentials'});}
    console.log("User Logged In");
    res.send(req.body.dob);
})


module.exports=router;