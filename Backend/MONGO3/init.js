const mongoose= require('mongoose') ;
const Chat = require("./models/chat.js");


//connection to db
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then(() => {
    console.log("connection successFull")
}).catch((err) => {
    console.log(err)
});


const chats = [
    { from: "vikash", to: "rahul", msg: "Hey, how are you?", created_at: new Date() },
    { from: "priya", to: "neha", msg: "Let's meet tomorrow.", created_at: new Date() },
    { from: "amit", to: "rohit", msg: "Did you complete the assignment?", created_at: new Date() },
    { from: "sonali", to: "vikash", msg: "Call me when you are free.", created_at: new Date() },
    { from: "neha", to: "priya", msg: "I am going on vacation!", created_at: new Date() },
    { from: "rahul", to: "amit", msg: "Send me the notes.", created_at: new Date() },
    { from: "rohit", to: "priya", msg: "Are you coming to the party?", created_at: new Date() },
    { from: "vikash", to: "sonali", msg: "Happy Birthday!", created_at: new Date() },
    { from: "priya", to: "rohit", msg: "Let's plan a trip.", created_at: new Date() },
    { from: "amit", to: "neha", msg: "How was your day?", created_at: new Date() }
];

Chat.insertMany(chats); 

