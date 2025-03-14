const mongoose =require("mongoose");

const chatSchema= new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true

    },
    msg:{
        type:String,
        MaxLength:50
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

const Chat=mongoose.model("chat",chatSchema);   // here chat is the collection name and Chat is the model name 
module.exports=Chat;