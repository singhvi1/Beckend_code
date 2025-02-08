let array= [1,2,3,4,5,6,7,8,9];
                //forEach(fxn or name)

// for functions
//m1:
//     console.log(el);
// }
// array.forEach(print);
// let print=function(el){

//m2
// array.forEach(function(el){
//     console.log(el);
// })
// //m3
// array.forEach((el)=>{
//     console.log(el);
// })

//for objects   
let arr= [
    {
        name:"aman",
        marks:95,
    },
    {
        name:"shradha",
        marks:94.4,
    },
    {
        name:"rajat",
        marks:92,
    },
];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });


        //map
let num=[1,2,3,4,5,6,7,8,9,10,20];
let mapArr=num.map((el)=>{
    return el*el;
})


        //filer;
let filterarr=mapArr.filter(el=>{
    return el%2==0;
})
        //every
 let booleanEvery=filterarr.every(el=>(el%2==0));
//  console.log(booleanEvery);

        //reduction ;
let finalval= num.reduce((red,el)=>{
    return red+el ;
});
// console.log(finalval);

//max in an array by reduce method ;
    //let num=[1,2,3,4,5,6,7,8,9];
let result = num.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});

//multiple of 10;
let multi=num.reduce((ans,el)=>{
    if(el%10==0){
        // console.log(el);
        return el
    }
});
//chaecking all are multiple of 10;
let multip=num.every(el=>{el%10==0});
// console.log(multip);

//default parameter;
function sum(a,b=1){
    return a+b;
}
function sum1(a=1,b){
    return a+b;
}
// console.log(sum(2));//3
// console.log(sum(2,3));//5
// console.log(sum1(2));//Nan
// console.log(sum1(2,2));//4

//spread num=[1,2,3,4,5,6,7,8,9];
function min(){
    return Math.min(...num);
};
// console.log(..."apnacollege");
//spread on array literals ;
let newnum=[...num];
//spread on object literals;
const data={
    name:"tony stark ",
    email:"ironMan@gmail.com",
};

const datacopy={...data,role:"advisor"};

//arr to obj since obj have key :value but array have only values ;
// let obj={...num};
// let objS={..."vikash"};

//rest ;
function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us ",args[i]);
    }
};
function min(s,f,r,w){
    console.log(arguments);
}

const student ={
    name:"vikash",
    age:14,
    class:9,
    subjects:["hindi","ENglish","Maht"],
    userName:"@singvi"

};
let {userName,age=8}=student;