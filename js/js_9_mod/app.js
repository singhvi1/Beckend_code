// let smallImages=document.getElementsByClassName("oldImg");

//iteration on images;
// for(let i=0;i<smallImages.length;i++){
//     console.log(smallImages[i]);
//     console.log(smallImages[i].src); 
// }

//changing images 
// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="assets/spiderman_img.webp";
//     console.log(`value of img_${i} is changed` );
// }
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelectorAll("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));

//L-09:manupulating the element ;


//l-11;manupulating style;
let links = document.querySelectorAll('.box a');
for(let i = 0 ;i<links.length;i++){
    links[i].style.color='red';//these are stored inline property ;
}
// for(link of links){
//     link.style.color="blue";//inline property ;

// }

//manupulating style using classlist ;

//adding and removing function ;
// let button =document.querySelector('button');
// button.addEventListener('click',()=>{
//     button.classList.add('active');
// });
// Select the elements
let message=document.querySelector('#message');
let hidebutton=document.querySelector('#hideButton');
hidebutton.addEventListener('click',()=>{
    message.classList.remove('visible');
    message.classList.add('hidden');
});




