const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express=require("express");
const app=express();

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

app.get("/",(req, res)=>{
    let q=`SELECT count(*) As total FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result[0].total);
            res.send(result[0].total.toString());
        })
    }catch(err){
        res.send("something went wrong");
    }
})


app.listen ("8080", ()=>{
    console.log("server is listening to port 8080");
})