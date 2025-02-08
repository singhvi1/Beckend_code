//01.Event bubbling ;

//aceess all element
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// //adding eventListner to each
// div.addEventListener("click", function () {
//   console.log("div was clicked");
//   alert('div is clicked')
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     alert('ul is clicked ');
//   console.log("ul was clicked");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();

//     console.log("li was clicked");
//   });
// }


//o2.to do DOM;
let inp=document.querySelector('#text');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener('click',function click(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let btnE=document.createElement('button');
    btnE.innerText='delete';
    btnE.classList.add('delete');

    item.appendChild(btnE);
    ul.appendChild(item)
    inp.value="";
});
//press Enter to submit ;
inp.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        btn.click();
    }
});

//deleting the butttons ; this will not work on new deletee buttons ;
// let delbtns=document.querySelectorAll(".delete");
// for(let delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         //now we need to delete parent element ;
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

//03.Event deligence; to work delete on new delete buttons ;


//apply eventListner on  buttons on parent of delete like li /ul by event bubbling ;

ul.addEventListener("click",function(event){
    if(event.target.nodeName=='BUTTON'){
        let par=event.target.parentElement;
        let itemD=par.childNodes[0].nodeValue
        console.dir(itemD);
        par.remove();
    }
})



