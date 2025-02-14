// import mongoose from 'mongoose'; // this will not work why ? bcz it is will  only work for module type files 

// let url= "https://localhost:8080/users";
// mongoose.connect('mongodb://127.0.0.1:27017/test');

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));


//03:creating schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

//04.Creating Model: a intercace that allow us to interact with db . it is a class with which we construct  documents . we will use this class to CRUD  opration.

const User= mongoose.model("User",userSchema); // user class is created 
// const Employee= mongoose.model("Employee",userSchema);

//05. insert data in user colletion
const user1=new User({name:"Adam", email:"adam@yahoo.in",age:48});
const user2=new User({name:"Eve", email:"Eve@google.com",age:48});

user2
    .save()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    });
User.insertMany([
    {name:"Tony",email:"tony@gmail.com",age:50},
    {name:"Peter",email:"peter@gmail.ocm",age:30},
    {name:"Bruce",email:"bruce@gmail.com",age:47},
]).then((res)=>{
    console.log(res);
})
