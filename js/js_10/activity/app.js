console.log('generate random color');

let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    let random=getRandomColor();
    let h4=document.querySelector('h4');
    h4.innerText=random;
    console.log("color updated");
    let div=document.querySelector('div');
    div.style.backgroundColor=getRandomColor();
})
function getRandomColor(){
    let red =Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255);
    let blue =Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}