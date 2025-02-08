// const students={
//     name:"sharadha ",
//     age:"22",
//     marks:"94.4"
// };

//thread/twitter post;
const post={
    username:"@singvi777",
    content:"this is my #firstPost",
    likes:151,
    reposts:5,
    tags:["@Pec","agv"]
};

//conversion in values ;
const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"

};


//objects of objects;
const classinfo=[
    {
        aman:{
            grade:"A+",
            city:"mumbai"
        },
        shradha:{
            grade:"A",
            city:"barH"
        },
        karan:{
            grade:"c",
            city:"fjd"
        }
    }
];


//random integers; in range of 1 to 10 ;
let num=Math.random();
num=num*10;
num=Math.floor(num);


//guessing game :user enter a max number theb tries to guess a random generated number between 1 to 10;
const max=prompt("enter the max number ");
const random=Math.floor(Math.random()*max)+1;
let guess= prompt("guess any number between 1 to max or Quit ");

while(true){
    if(guess== "Quit"){
        console.log("user_Quit");
        break;
    }
     if (guess ==random){
        console.log("your guess is right ");
        break;
    }
    else if(guess>random){
        guess=prompt("your guess is large guess small ");
    }else{
        guess=prompt("your guess is small guess small ");

    }
    // else{
    //     console.log("wrong guess");
    //     console.log(random);
    //     guess= prompt("try other  number between 1 to max or Quit ");
    // }
}

