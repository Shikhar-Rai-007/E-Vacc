const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema=new Schema({
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
    age:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports=mongoose.model('Users',UserSchema);