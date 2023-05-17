const express=require('express');
const Users = require('../models/Users');

const router=express.Router();

router.post('/UserLogin',async (req,res)=>{
    const {dob,phNo}=req.body;

    const currUser=await Users.find({$and:[{dob:dob},{phNo:phNo}]});
    if(!currUser){ return res.status(401).json({error:'Invalid User Credentials'});}
    console.log("User Logged In");
    //console.log(currUser);
    //const response=JSON.stringify(currUser);
    res.json(currUser);
})


module.exports=router;