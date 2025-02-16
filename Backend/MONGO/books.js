const mongoose = require('mongoose');

// drop database :=>use database-> db.dropDatabase();
//colection drop=>db.collection.drop() 
//collection clear =>db.collection.deleteMany({});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
main()
.then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));
//schema->model(object, schemaName)->CRUD
const bookSchema = new  mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
    },
    Price:{
        type:Number,
        // min:1   //  if we need custom error then 
        min:[1, `Price should be greater than 1`]
    },
    discount:{
        default:0,  // if we dont define it will be default as 0;
        type:Number
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String]
})

const Book = mongoose.model("Book",bookSchema);
//  let book1= new Book({
//     title:"Mathmatics xii",
//     author:"RD SHERMA",
//     Price:1200
//  });
// book1.save()
//  .then((result) => {
//     console.log(result)
//  }).catch((err) => {
//     console.log(err)
//  });

//  let book2= new Book({
//     title:"How to kill a MockingBird",
//     author:"Harper Lee",
//     Price:1200
//  });
//  book2.save()
//  .then((result) => {
//     console.log(result)
//  }).catch((err) => {
//     console.log(err)
//  })

// let book3= new Book({
//     title:"Gone Girl", // cant be more than 20 cah
//     Price:"399"
//  });
//  book3.save()
//  .then((result) => {
//     console.log(result)
//  }).catch((err) => {
//     console.log(err)
//  })
// let book4= new Book({
//     title:"Marverl comics V2", // cant be more than 20 cah
//     Price:500,
//     category:"fiction",
//     genre:["comics", "superhero","fiction"]
//  });
//  book4.save()
//  .then((result) => {
//     console.log(result)
//  }).catch((err) => {
//     console.log(err)
//  })
 
 //validation in update and error ,

 /*
    so the rules or constraint  that we define in schema only work while insertion not updataion let check  */
    //updat Modle.findByIdAndUpdate("id",{update})

    Book.findByIdAndUpdate("67b1b5d3376a76e780501c5b",{Price: -100},{runValidators:true})
    .then((result) => {
        console.log(result)
    }).catch((err) => { 
        console.log(err.errors.Price.properties.message)
    });

