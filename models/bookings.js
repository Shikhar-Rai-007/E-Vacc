var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var passportLocalMongoose=require('passport-local-mongoose');
var User=new Schema({
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    age:{
        type:Number,
        default:1
    },
    phNo:{
        type:Number,
        default:0000000000
    },
    admin:{
        type:Boolean,
        default:false
    }
});
User.plugin(passportLocalMongoose);

module.exports=mongoose.model('User',User);