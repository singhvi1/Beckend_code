
//01.async function ;
// async function greet(){
//     throw"404 page not found ";
//     return "hello";
// }
// greet()
//     .then((result)=>{
//         console.log("promise was resolved");
//         console.log("resut was :" ,result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected with err :",error);
//     })

//02.await keywords;
function getNum(){//random int 1-10 with timeout of 1000ms
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num= Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    })
}
async function demo(){
    await getNum();
    await getNum();
    getNum();
}
// demo();

//now using await color change 
h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num=Math.floor(Math.random()*10)+1;
            if(num>4){
                reject("color rejected");
            }
            h1.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    })
}
async function demo(){
    try {
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("yellow",1000);
        await changeColor("blue",1000);
        }catch(err){
            console.log(err," Error caught");
            
        }
    
    let a=5;
    console.log(a);
    console.log("new num = ",a+3);
}

// demo();


//07.Accessing JSON data via 1.JSON.parse(data); and jSON.stringify(Json);
let jsonRes='{"fact": "The strongest climber among the big cats, a leopard can carry prey twice its weight up a tree.","length": 94}';
// console.log(jsonRes);
let validRes=JSON.parse(jsonRes);
// console.log(validRes.fact);

//js object to JSON;
let student={
    name:"shradha",
    cgpa:"9.9",
};

//14.our first api request 

let url = "https://icanhazdadjoke.com/slack";
// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         res.json().then((data)=>{
//             console.log(data);
//         })
//     })
//     .catch((err)=>{
//         console.log("ERROR -",err);
//     })
fetch(url)
    .then((res)=>{
        // console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log("data1: ",data.attachments[0].fallback);
        return fetch(url);

    })
    .then((res)=>{
        // console.log(res);
        return res.json();
    })
    .then((data2)=>{
        console.log("data2: ",data2.attachments[0].fallback);

    })
    .catch((err)=>{
        console.log("ERROR -",err);
    })