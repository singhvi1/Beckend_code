function hello(){
    console.log("hello");
}
// hello();

function  print1to5(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
// print1to5();


//roll a dice ;
function rollADice(){
    console.log(Math.floor(Math.random()*6)+1);
}
// rollADice();

//function with arguments ;
function printinfo(name,age){
    console.log(`name is ${name} and age is${age}`);
}


//average of three numbers ;
function average(a,b,c){
    console.log((a+b+c)/3);
}


//multiplication of n ;
function multiplication(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

//return function ;
function Sum(a,b){
    return a+b;
}

//sum of n numbers;
function getSum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

//return concatination of all string in array ;
let str=["hi"," i"," am"," vikash"];
function concat(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        ans+=str[i]; 
    }
    return ans;
}

//function extpression ;
let sum= function(a,b){
    return a+b;
}

// sum(4,5);

//Higher order function :taking multiple function as input ;
function multiplefuncion(func,count){
    for(let i = 0 ;i<count ;i++){
        func();
    }
}

let greet=function(){
    console.log("hello");
}
// multiplefuncion(greet,10);
// multiplefuncion(function(){console.log("oye")},10);


//Higher order function :return a function  :as oddEvenTest();
let request="odd";
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(n%2!=0);
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("unexpected request");  
    }
}




