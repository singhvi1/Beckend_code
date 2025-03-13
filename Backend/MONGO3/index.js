const express=require("express");
const app=express();
const mongoose= require('mongoose') ;
const path=require("path");
const Chat = require("./models/chat.js");
const methodOverride=require("method-override")

app.set("views",path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

//setting monogoDb
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then(() => {
    console.log("connection successFull")
}).catch((err) => {
    console.log(err)
});
// add a single data to db;
const chat1=new Chat(
    { from: "vikash", to: "vimal", msg: "Hi i am vikash from Barh" },

)
chat1.save().then(() => {
    console.log("chat saved")
}).catch((err) => {
    console.log(err)
});

 // 03.=> to add data by init.js to add data to database; node init.js

//04.=> creating index Route;  we will make a /chats   : index Route
app.get("/chats", async (req,res)=>{    
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats})
});


//05.=>Creating Get request: New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//06.=>Creating Routing 

app.post("/chats",(req,res)=>{
    let {from , to , msg}=req.body;   // we need to parse it by wiriting something ? ? ? By default, Express does not parse req.body from an HTML form.
    //👉 Solution: Use express.urlencoded() middleware.
    let nwChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
    nwChat.save()
    .then(() => {
        console.log("chat saved");
    }).catch((err) => {
        console.log(err)
    });
    // console.log(nwChat);
    res.redirect("/chats");
    // res.send("i need to save the data");
})

//08.> edit Route;
app.get("/chats/:id/edit", async (req,res)=>{ //never forget -> :id ":"
    let {id}=req.params;
    let chat= await Chat.findById(id);

    res.render("edit.ejs" ,{chat})
    // res.send("i want to edit it ");
})

//09. update route:
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let { msg:nwMsg }=req.body
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:nwMsg},{runValidators:true,new :true})
    console.log(updatedChat);
    res.redirect("/chats")
})

//10.Destroy Route ;
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let chatDeleted=await Chat.findByIdAndDelete(id) // if i dint make it await it will excute but this is asynchronous so this line will not able to execute;
    console.log(chatDeleted)
    res.redirect("/chats")
    // res.send("i want to delete this chat");
})








app.get("/",(req,res)=>{
    res.send("root is working ")
})

app.listen(8080,()=>{
    console.log("server is listening");
});

