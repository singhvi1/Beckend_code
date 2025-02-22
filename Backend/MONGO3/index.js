const express=require("express");
const app=express();
const mongoose= require('mongoose') ;
const path=require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then(() => {
    console.log("connection successFull")
}).catch((err) => {
    console.log(err)
});


 // 03.=> to add data by init.js to add data to database;

//04.=> creating index Route;  we will make a /chats
app.get("/chats", async (req,res)=>{    
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats})
});










app.get("/",(req,res)=>{
    res.send("root is working ")
})

app.listen(8080,()=>{
    console.log("server is listening");
});

