const express=require('express');
const Admin=require('../models/Admins');
const router=express.Router();


router.get('/',(req,res)=>{
    console.log(req.body);
    res.send("Hello from the Backend");
})


module.exports=router;