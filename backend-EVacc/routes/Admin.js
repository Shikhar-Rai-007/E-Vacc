const express=require('express');
const Admins=require('../models/Admins');
const Users = require('../models/Users');
const router=express.Router();


router.get('/',(req,res)=>{
    console.log(req.body);
    const admin=Admins(req.body);
    admin.save();
    res.send(req.body);
})

router.get('/getAllUsers',async (req,res)=>{
    const{dob,phno}=req.body;

    const users=await Users.find();

    // if(!user){
    //     return res.status(401).json({error:'Invalid Date of Birth of Password'});
    // }
    //console.log(users);
    res.json(users);
})

router.post('/createUsers',async(req,res)=>{
    try{
        const{firstName,lastName,phNo,dob,age}=req.body;
        const user=new Users({
            firstName,lastName,phNo,dob,age
        })

        const savedUser=await user.save();
        res.json(savedUser);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})
module.exports=router;