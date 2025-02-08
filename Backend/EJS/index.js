const express =require("express");
const app=express();
const path=require("path");

let port=8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public/css")))//linking public 
app.use(express.static(path.join(__dirname,"/public/js")))//linking public 



app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home.ejs");
})
//for rolldice_passing the value form database ;
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal})
})

app.get("/hello",(req,res)=>{
    res.send("hello")
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
});

//06.Activity:create a basic template for instagram page based on following route /ig/:username now i am doing this topic 

app.get("/ig/:username",(req,res)=>{//09
    const instData=require("./data.json");
    console.dir(instData);
    let {username}=req.params;
    if(instData[username]){
        res.render("instagram.ejs",{data:instData[username]});//passing only data.usernamer
    }else{
        // res.send("<h1>No such user found</h1>") //or make a error page 
        res.render("error.ejs")
    }
    
})
