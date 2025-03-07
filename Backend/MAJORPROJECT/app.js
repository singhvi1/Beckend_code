const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing =require("../MAJORPROJECT/models/listing.js") 
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));//to parse all data
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,"/public" )));

//05.index Route
app.get("/listings",async (req,res)=>{
    const allListing=await Listing.find({});
    res.render("listings/index.ejs",{allListing});
})
//07.create new listing : New Route at //listings/new
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
    // res.send("i want to create  a new listing");
})

//create Route
app.post("/listings",async (req,res)=>{
    // let {title,description,image,location,country}=req.body;
    // console.log(req.body); //this is method 1;

    //method 2 :  make all  variable a object key in new.ejs;
    // let listings=req.body.listing;
    // console.log(listings);
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // res.send("i want to save the data coming from form")
}) ;

//08.UPDATE:(edit and update route)
//edit route  at "/listings/<%=listing._id %>/edit";
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
    // res.send(`i want to edit this ${id} `)
})
//put or update ROute;
app.put("/listings/:id",async (req,res)=>{
    let {id}=req.params;  // deconstrut
    // console.log(req.body.listing);
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    res.redirect(`/listings/${id}`);
    // res.send(`i want to save all data edit of ${id}`);
})

//09.DELETE Route;
app.delete("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings")
    // res.send(`i want to delete this listing of ${id}`)
})


//why 7 is up 6 and not give error ? bcz server  think /listing/new === /listing/:id where (new == id)


//06.Show route
app.get("/listings/:id", async(req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
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
