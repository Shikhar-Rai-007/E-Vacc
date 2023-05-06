const mongoose=require('mongoose');
const {Schema}=mongoose;

const AdminSchema=new Schema({
    firstName:{
        type:String,
        default:'',
        required:true
    },
    lastName:{
        type:String,
        default:'',
        required:true
    },
    phNo:{
        type:Number,
        default:0000000000,
        unique:true,
        required:true
    },
    admin:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Admins',AdminSchema);