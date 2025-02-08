const student={
    name:"vikash",
    age:22,
    eng:95,
    math:93,
    phy:97,
    getAverage(){
        console.log(this);
        let average=(this.age+this.eng+this.math)/3
        console.log(average);
        console.log(`average marks of ${this.name}  is  ${average}`);
    }
}

const obj = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

function globalGreet() {
    console.log(this);
}

//arrow function ;
const sum=(a,b)=>{
    // return (a+b);
    console.log(a+b);
}
// console.log(sum(4,5));

    //cube 
const cube=n =>{
    return n*n*n;
}
// console.log(cube(2));

    //implicit return ;
const mul=(a,b) =>(
    a*b
);

//set interval;
// const idk1=setInterval(()=>{console.log("hello i am ")},4000);
// const idk2=setInterval(()=>{console.log("vikash  ")},5000);

//this and arrow fxn;
const students={
    name:"vikas",
    marks:95,
    prop:this,  //global scope;
    getName:function(){
        console.log(this);
        return this.name;       
    },
    getMarks:()=>{
        console.log(this);
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);
        }, 2000);
    },

};

//write an arrow function which return square of n;
const square=(a)=>{
    return a*a
}
// console.log(square(4));

//write a program that print "hello world" 5 times in interval of 2 sec;
let idk9=setInterval(()=>{
    console.log("hello world")
},2000);
setTimeout(() => {
    clearInterval(idk9),
    console.log("endded")
}, 10000);

