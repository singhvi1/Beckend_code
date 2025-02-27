const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const listing=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type: String
    },
    Image:{
        type:String,
        set:(v)=>v===""?"https://images.unsplash.com/photo-1739467372234-2aba33f6b7ee?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D": v
    },
    Price:Number,
    location:String,
    country:String
})

const Listing=mongoose.model("Listing",listingSchema);
module.export=Listing;