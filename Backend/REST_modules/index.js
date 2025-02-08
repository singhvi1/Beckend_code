const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"))
app.use(express.static(path.join(__dirname,"public")));

//to understand the datacoming form client;
app.use(express.urlencoded({extended:true}));

//to override the form action of only get and post to pactch
app.use(methodOverride("_method"));

//since we dont have the database so we will create a array
let posts=[
    {
        id: uuidv4(),
        username:"vikash kumar",
        content:"i love coding"
    },
    {
        id: uuidv4(),
        username:"vimal",
        content:"i love math"
    },
    {
        id: uuidv4(),
        username:"uttum",
        content:"i love politics"
    }
]
    

app.get("/posts",(req,res)=>{
    // res.send(`Server is running on ${port}`);
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    // console.log(req.body);  // always check it first and then proceed.
    let {username , content}=req.body; //destructure
    let id=uuidv4();
    posts.push({username, content,id});
    // res.send('working post created')
    res.redirect('/posts');//get requsest
});
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=>id==p.id);
    console.log(post);
    res.render("show.ejs",{post});
})

//edit post;
app.patch("/posts/:id",(req,res)=>{
    let {id} =req.params;
    console.log(id);
    let nwContent=req.body.content;
    let post =posts.find((p)=>id==p.id);
    post.content=nwContent;
    console.log(nwContent);
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("edit.ejs",{ post });
})

//deleting the request;
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!=p.id);
    // res.send(`delete request from ${id}`);
    res.redirect("/posts");
})












app.listen(port,(req,res)=>{
    console.log(`listening on ${port}`);
})