const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing =require("../MAJORPROJECT/models/listing.js") 
const path=require("path");


//05.index Route
app.get("/listing",async (req,res)=>{
    const allListing=await Listing.find({});
    res.render("index.ejs",{allListing});
    // res.send("i want a list");
})





app.get("/testListing", async (req,res)=>{
    let sampleListing=new Listing({
        title:"my new villa",
        description:"By the beach",
        price:1200,
        location:"calaguate , Goa",
        country:"india"
    })
    await sampleListing.save();
    console.log(sampleListing)
    res.send("testing is onroad")
})



//connecting mongodb:
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("connected to db")     
}).catch(() => {
    console.log("err to connection to db");;
});
async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/",(req,res)=>{
    res.send("Hi i am root");
})
app.listen(8080,()=>{
    console.log("server is listeningto port 8080");
})
