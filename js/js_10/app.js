//05.eventListner for this;

// let p=document.querySelector('p');
// p.addEventListener('click',()=>{
//     console.log('button was clicked');
// });
// let box=document.querySelector('.box');
// box.addEventListener('mouseenter',()=>{
//     console.log('mouse enter');
// });

//06."this " in eventListner;
// let btn=document.querySelector('button');
// let h1=document.querySelector('h1');
// let h2=document.querySelector('h2');
// let p=document.querySelector('p');

// // btn.addEventListener('click',function() {
// //     console.log(this);
// //     this.style.backgroundColor='yellow'
// // });
// // h1.addEventListener('click',function() {
// //     console.log(this);
// //     this.style.backgroundColor='yellow'
// // });
// // h2.addEventListener('click',function() {
// //     console.log(this);
// //     this.style.backgroundColor='yellow'
// // });

// function changecolor() {
//     console.log(this);
//     this.style.backgroundColor='yellow'
// };
// p.addEventListener('click',changecolor);
// h1.addEventListener('click',changecolor);
// h2.addEventListener('click',changecolor);
// btn.addEventListener('click',changecolor);

//07.Keyboard Events

let btn = document.querySelector("button");
// btn.addEventListener('click',function(event){
//     console.log(event);
//     console.log('button clicked');
// });
// btn.addEventListener('dblclick',function(event){
//     console.log(event);
//     console.log('button clicked');
// });

//keyboardEvent;
// let inp=document.querySelector('input');
// // function press(){
// //     console.log("keyboard pressed");
// //     console.log(`Eventkey= ${event.key} `);
// //     console.log(`Eventkey= ${event.code}` );
// // }
// function press(){
//     console.log(event.code)
//     if(event.code=='ArrowUp'){
//         console.log('charcter moving up');
//     }else if(event.code =='ArrowDown'){
//         console.log(`character is moving ${event.key}`)
//     }else if(event.code =='ArrowLeft'){
//         console.log(`character is moving ${event.key}`)
//     }
//     else if(event.code =='ArrowRight'){
//         console.log(`character is moving ${event.key}`)
//     }
// }

// inp.addEventListener('keyup',press);

//8:formEvent ;
// let form =document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     alert('form submitted');
// })
//09.Exracting data;
// let form =document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     let inp=document.querySelector('input');
//     console.dir(inp);
//     console.log(inp.value);
//     // alert('form submitted');
// })

//9.2:extracting data ;
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// //   let user= document.querySelector('#user');
// //   let pass=document.querySelector('#pass');
// let user=this.elements[0];
// let pass=this.elements[1];  //form.element[i] is property of form
//   console.log(user.value);
//   console.log(pass.value);
//   alert(`hi ! your userName  is ${ user.value} and password is set to ${pass.value}`);
// });
//10. More Events like changeEvent  input event 
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });
// //change input 
// let user= document.querySelector('#user');
// user.addEventListener('change',function(){
//     console.log('change event ');
//     console.log('final value =',this.value);
// })
// user.addEventListener('input',function(){
//     console.log('input changed');
//     console.log('final value =',this.value);
// })

//Activity ;

let p=document.querySelector('p');
let inp=document.querySelector('#text');
inp.addEventListener('input',function(){
    console.log(inp.value);
    p.innerText=inp.value;
})
