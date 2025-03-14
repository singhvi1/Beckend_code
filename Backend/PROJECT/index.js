const express=require("express");
const app=express();
const mongoose= require('mongoose') ;
const path=require("path");
const Chat = require("./models/chat.js");
const methodOverride=require("method-override")
const ExpressError=require("./ExpressError");

app.set("views",path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

//setting monogoDb
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
main()
.then(() => {
    console.log("connection successFull")
}).catch((err) => {
    console.log(err)
});

//creating index Route;
app.get("/chats", async (req,res)=>{    
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats})
});


//05.=>Creating Get request: New Route
// app.get("/chats/new",(req,res)=>{
//     res.render("new.ejs");
// })
//50.5 we will try our err handler on syn then asyn so syn : 
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found!");//50.5
    res.render("new.ejs");
})

//WrapAsync fxn:
function asyncWrap(fn){
    return function (req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}


//show route : 
//m1: next(err)
{/**app.get("/chats/:id",async (req,res, next )=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    // if(!chat){
    //     throw new ExpressError(404,"Chat not found")
    // } why ? bcz express doesnot explicitly handle the rejected promises ? why bcz it is not bubble up from stack naturlly so ? it is left behind in event loop task queue hanging waiting to handled explictly; by next() or try catch or express-async-handler
    if(!chat){
        next(new ExpressError(404,"Chat not found !")); //dont forget next in arg
    }
    res.render("edit.ejs",{chat});
}) */}


 //m-2
 {/*app.get("/chats/:id",async(req,res,next)=>{
    try{
        const chat=await Chat.findById(req.params.id);
        if(!chat){
            throw new ExpressError(404,"Chat not found !")
        }
        res.render("edit.ejs",{chat});
    }catch{
        next(new ExpressError(404,"Chat not found !"));
    }
 }) */}

 //m-3: 
 const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

//same as 3 and 4 common just install express default asyn handler npm pakage;
 app.get("/chats/:id",asyncHandler( async(req,res, next )=>{
    let {id}=req.params;
    const chat=await Chat.findById(id);
    if(!chat){
        next(new ExpressError(404,"Chat not found !")); //dont forget next in arg
    }
    res.render("edit.ejs",{chat});
}));
 

//06.=>Creating Routing 

app.post("/chats",async (req,res,next)=>{
    try{let {from , to , msg}=req.body;
    let nwChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
    await nwChat.save()
    res.redirect("/chats");}
    catch(err){
        next(err)
    }
})
{/*app.post("/chats",async (req,res)=>{
    let {from , to , msg}=req.body;   // we need to parse it by wiriting something ? ? ? By default, Express does not parse req.body from an HTML form.
    //👉 Solution: Use express.urlencoded() middleware.
    let nwChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
    await nwChat.save()
    .then(() => {
        console.log("chat saved");
    }).catch((err) => {
        console.log(err)
    });
    // console.log(nwChat);
    res.redirect("/chats");
    // res.send("i need to save the data");
}) */}

//08.> edit Route;
app.get("/chats/:id/edit",asyncWrap (async (req,res)=>{ //never forget -> :id ":"
    let {id}=req.params;
    let chat= await Chat.findById(id);

    res.render("edit.ejs" ,{chat})
    // res.send("i want to edit it ");
}))

//09. update route:
app.put("/chats/:id",asyncWrap(async (req,res)=>{
    let {id}=req.params;
    let { msg:nwMsg }=req.body
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:nwMsg},{runValidators:true,new :true})
    console.log(updatedChat);
    res.redirect("/chats")
}))

//10.Destroy Route ;
app.delete("/chats/:id",asyncWrap (async (req,res)=>{
    let {id}=req.params;
    let chatDeleted=await Chat.findByIdAndDelete(id) // if i dint make it await it will excute but this is asynchronous so this line will not able to execute;
    console.log(chatDeleted)
    res.redirect("/chats")
    // res.send("i want to delete this chat");
}))




app.get("/",(req,res)=>{
    res.send("root is working ")
})

const handleValidationErr=(err)=>{
    console.log("this was a ValidationError .please follow rules ")
    console.log(err.message);
    return err;
}

//error name:
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
        // console.log("this was a ValidationError .please follow rules ")
        err=handleValidationErr(err)
    }
    next(err)
})
//custom error handler middleware : 
app.use((err,req,res,next)=>{
    let {status=500,message="Some internal error occured"}=err;
    res.status(status).send(message);
})



app.listen(8080,()=>{
    console.log("server is listening");
});

