const express=require("express");
const app = express();
const ExpressError=require("./ExpressError");
// 01/02
// app.use((req,res ,next)=>{
//     // let {query}=req.query;
//     // console.log(query)
//     console.log("hi i am middleware")
//     // res.send("middleware finished");
//     // next();
//     return next();
// });


//07.passing multiple middleware:
let checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token=="giveaccess"){
        next();
    }
    // else{
    //     res.send("ACCESS DENIED!");
    // } 
    //50.2 custom error:
    throw new ExpressError(401,"ACCESS DENIED!") // we can add addinal headers ? what is this header in it and how we can add it ? 
}
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})



//06.Activity: api token as query String;
// app.use("/api",(req,res,next)=>{ //setting token for /api 
//     let {token}=req.query;
//     if(token=="giveaccess"){
//         next();
//     }else{
//         res.send("ACCESS DENIED!")
//     }

// })
// app.get("/api",(req,res)=>{
//     res.send("data"); //means it is a admin data only accessed by admin so i need token
// })

//05.exploring app.use();
app.get("/random",(res,req,next)=>{
    console.log("middleware working only for /random")
    next()
})


// 04.creating utility middleware logger : 
//logger
// app.use((req,res,next )=>{
//     // console.log(req);
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method, req.hostname,req.path,req.time)
//     next();
// });

app.get("/",(req,res)=>{
    res.send("server started");
})
app.get("/random",(req,res)=>{
    res.send("hi this is a random page ");
})

//08.error : 
app.get("/wrong",(req,res)=>{
    abocsk=sdfhdsk
})

app.use((err,req,res,next)=>{
    // console.log(err)
    console.log("----ERROR----");
    // next();   // what is it calling non error handling middleware 
    next(err) // what is it calling  a error handling middleware 
})
// app.use((err,req,res,next)=>{
//     console.log("---ERROR 2----")
//     // next(err)
//     // next(err)
//     res.send(err) //50.2    
// })
//50.3 Default status and message:
// app.use((err,req,res,next)=>{
//     let {status, message}=err;
//     res.status(status).send(message) //50.3    
// })
//50.4
app.use((err,req,res,next)=>{
    let {status=500, message="some random error occured"}=err;
    res.status(status).send(message) //50.3    
})

//50.5 Activity create /admin and throw error as 403 "access to admin it forbidden"

app.use("/admin",(req,res)=>{
    throw new ExpressError(403,"Access denied at admin page")
})

//404
app.use((req,res)=>{
    res.status(404).send("page not found !");
})  // it is not a error handler 


app.listen(8080,()=>{
    console.log("server is listing on 8080")
})
