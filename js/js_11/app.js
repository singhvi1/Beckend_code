// function one(){
//     return 1;
// }

// function two(){
//     return one() +one();
// }

// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }

// // three();

// //5.callBack
// h1=document.querySelector('h1');
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange()//if there exist next color change then do color change ;
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

//06.setting up for promises ;

// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10+1);
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }

// }
// savetoDb(
//   "apna College",
//   () => {
//     console.log("success:your data was saved :");
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2:your data was saved :");
//       },
//       () => {
//         console.log("failure:weak connection data was not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure:weak connection data was not saved");
//   }
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success:your data is saves ", data);
//     } else {
//       reject("failure:Weak connection  data not saved ");
//     }
//   });
// }

//08.then() and catch ();
// let request=savetoDb("apna college");
// console.log(request);
// request
//     .then(()=>{
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

// savetoDb("apna college")
//     .then(()=>{
//         console.log("promise was resolved");

//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });

//09.promide chanining

// savetoDb("hello world ")
//     .then(()=>{
//         console.log("data1 saved");
//         savetoDb("apna college").then(()=>{//nested callback
//             console.log("data 2 saved");
//         })
//     })
//     .catch(()=>{
//         console.log("promises rejected ");
//     })

// savetoDb("hello world ")
//     .then(()=>{
//         console.log("data1 saved");
//         return savetoDb("apna college")
//     })
//     .then(()=>{
//         console.log("data 2 saved")
//         return savetoDb("vikash kumar");
//     })
//     .then(()=>{
//         console.log("data 3 was saved");
//     })
//     .catch(()=>{
//         console.log("promises rejected ");
//     })

//10.results and errors in promises;
// savetoDb("hello world ")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("apna college");
//   })
//   .then((result) => {
//     console.log("data 2 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("vikash kumar");
//   })
//   .then((result) => {
//     console.log("result of promise: ", result);
//     console.log("data 3 was saved");
//   })
//   .catch((error) => {
//     console.log("error of promise: ", error);
//     console.log("promises rejected ");
//   });


//11.refactoring old codes
// h1=document.querySelector('h1');
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange()//if there exist next color change then do color change ;
//     },delay);
// }
//callback hell

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

h1=document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed !");
        },delay);

    });
}
//now chaning callback hell to optimised;
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });
changeColor("red",1000)
    .then(()=>{
        console.log("red color changed in 1000");
        return changeColor("orange",1000)
    })
    .then(()=>{
        console.log("ornage color changed in 1000")
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color changed in 1000")
        return changeColor("yellow",1000);
    })
    .then(()=>{
        console.log("yellow color changed in 1000")
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color changed in 1000")
    })
    