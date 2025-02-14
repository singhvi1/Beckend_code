const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride =require("method-override");
const { v4: uuidv4 } = require("uuid");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true}));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Vikash@1234",
});
//checking the tables;
//   let q= "SHOW TABLES";
// try{
//     connection.query(q,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     });
// }catch(err){
//     console.log(err)
// }

// Inseriting new data;
// let q = "INSERT INTO user (id,username,email, password) VALUES (?,?,?,?)";//for multiple(?,?,?,?)-> ?
// let users=["123","123_newuser","abc@hsm.com","xyz"];
//or for multiple data;
// let users=[
//     ["123b","123_newuserb","abc@gmail.com","abcb"],
//     ["345b","345_newuserb","def@gmail.com","abcc"],
// ];

// try{
//     connection.query(q,  users,  (err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }
// connection.end();
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};
//   console.log(getRandomUser());

// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }
// console.log(data)

// let q = "INSERT INTO user (id,username,email,password) VALUE ?";
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();


//home route;
app.get("/",(req, res)=>{
    let q=`SELECT count(*) As total FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0].total;
            res.render("home.ejs",{count});
        })
    }catch(err){
        console.log(err)
        res.send("something went wrong");
    }
})



//get user:show route
app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("showusers.ejs",{users});
        });
    }catch(err){
        console.log(err)
        res.send("something went wrong");
    }
    // res.send("this is user page");
});

//edit user

app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;           //deconstruct ;
    let q= `SELECT * FROM user WHERE id ='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result[0]);
            // res.send(result[0]);
            let user=result[0];
            res.render("edit.ejs",{user});
        });
    }catch(err){
        console.log(err)
        res.send("something went wrong");
    }
    // console.log(q);
    // res.send(" i need to edit")
});

//now after submiting form of edit to need to update in database

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password :formPass, username: newUsername}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;  // ${id } must i '' to send it like ?? string in q;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];//user details form db
            if(formPass != user.password){
                res.send("wrong password");
            }else{
                //we will use nested querie
                let q2= `UPDATE user SET username='${newUsername}' WHERE id ='${id}'`;
                connection.query(q2,(err , result)=>{
                    if(err) throw err;
                    console.log(result);
                    res.redirect("/user");
                })
                // res.send(user);
            }
            
        });
    }catch(err){
        console.log(err)
        res.send("something went wrong");
    }
    
    // res.send("trying to update ")
})


//ADD user name by :POST
app.post("/user/add",(req,res)=>{
    // res.send("wanted to add a user");
    res.render("add.ejs");  
})
app.post("/user/submit",(req,res)=>{
    let newUserId = uuidv4();
    // console.log(newUserId);
    let {username:username ,email:email,password:password}=req.body;
    // console.log(username,email,password);
    // let q=`INSERT INTO user (id,username,email,password) VALUES(newUserId,username,email,password)`; // THIS IS WRON WHY ? 
    let q=`INSERT INTO user (id,username,email,password) VALUES(?,?,?,?)`;
    let data=[newUserId, username, email, password];
    connection.query(q,data,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
    // res.send("i want to save my data in databse")
})




app.listen ("8080", ()=>{
    console.log("server is listening to port 8080");
})