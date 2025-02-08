const express=require("express");

const app=express();
// console.dir(app);

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

//sending respense

// app.use((req,res)=>{
//     console.log(req);
//     console.log("request received");
//     // res.send("this is a basic response"); //sending as simple string
//     // res.send({
//     //     //sending as object -> json format
//     //     name:"apple",
//     //     color:"red",       
//     // });

//     //sending a html code 
//     // let code ="<h1>Fruits</h1> <ul><li>apple </li> <li>oranges</li></ul>"
//     // res.send(code);

//     //sending as jsonData:
//     res.json({ message: "Hello, this is a JSON response!" });

// })


//5.Routing:is a process of selecting path ;
//using app.get("path , callback")


// app.get("/",(req,res)=>{
//     res.send("hello i am root and ");
// })
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// })
// app.get("*",(req,res)=>{
//     res.send("this path doesnot exist");
// })

// //using app.post(path, callback [, callback ...])
// app.post("/",(req,res)=>{
//     res.send("you send a post request to root");
// })

//7.PathParameters:
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username , id }=req.params;

    let htmlStr=`<h1>welcome to the the page of ${username} with id ${id}</h1>`;
    res.send(htmlStr)  //when all get are not commented then why it is not running
});

//8.QueryString
// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("no result")
// })
// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     res.send(`these are the search result for the query ${q}`);
// })
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send(`<h1>nonthing searched</h1>`)
    }
    res.send(`<h1>these are the search result for the query @${q}</h1>`);
})





