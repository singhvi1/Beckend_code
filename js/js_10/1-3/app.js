let btn = document.querySelector('button');
console.dir(btn);


//lets make a fxn onclick 


// btn.onclick=()=>{
//     alert("button was clicked ");
// };

function sayHello(){
    alert("hello");
}
function sayName(){
    alert("vikash_Kuamr");
}

// btn.onclick=sayHello;

//selcting multiple buttons ;
const buttons=document.querySelectorAll('button');
// for(button of buttons ){
//     button.onclick=sayHello;
//     button.onmouseenter=()=>{
//         console.log("you enterd in area of button ");
//     }
// }

//eventListner
// for(button of buttons ){
//     button.onclick=sayHello;  // here hello is not  working ;
//     button.onclick=()=>{
//         console.log("buttopn is clicked");
//     }
// }

for(const button of buttons ){
    // button.addEventListener('click',sayHello);
    // button.addEventListener('click',sayName);
    button.addEventListener('dblclick',()=>{
        console.log("you double clicked");
    });
}

