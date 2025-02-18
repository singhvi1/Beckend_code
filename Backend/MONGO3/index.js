const express=require("express");
const app=express();
const mongoose= require('mongoose') ;
const path=require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname, "views"));
app.set("view engine" , "ejs");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then(() => {
    console.log("connection successFull")
}).catch((err) => {
    console.log(err)
});




let Chat1=new Chat({
    from :"neha",
    to:"priya",
    msg:"i am vikash kumar",
    created_at:new Date()
})
Chat1.save()
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});


app.get("/",(req,res)=>{
    res.send("root is working ")
})

app.listen(8080,()=>{
    console.log("server is listening");
});

