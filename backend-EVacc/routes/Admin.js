const express=require('express');
const Admins=require('../models/Admins');
const router=express.Router();


router.get('/',(req,res)=>{
    console.log(req.body);
    const admin=Admins(req.body);
    admin.save();
    res.send(req.body);
})


module.exports=router;