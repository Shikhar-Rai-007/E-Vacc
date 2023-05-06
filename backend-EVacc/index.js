const connectToMongo=require('../backend-EVacc/DBConnection');
connectToMongo();

const express=require('express');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Listening to port:${port}`);
})