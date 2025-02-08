//  let n=5 ;
//  for (let i=0; i<n;i++){
//     console.log("hello " , i);
//  }

//  console.log(process.argv)


// let args=process.argv;
// for(let i=0;i<args.length;i++){
    
//     console.log("hello to " + args[i]);
// }

// const math=require("./math");
// console.log(math.sum(2,2))
// console.log(math.PI)

//importing complete directory must have index.js

// const info=require("./fruits");
// console.log(info);


// const figlet = require('figlet');


// figlet("viaksh", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



// import {sum, PI} from "./math.js"
// console.log(sum(1,2));



import { generateSlug } from "random-word-slugs";
const slug = generateSlug();
console.log(slug);
