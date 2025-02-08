// for(let i=0;i<15;i+=2){
//     console.log(i);
// }
//printing multiple of 5 ;



// let n = prompt("enter your number "); //note it always gave output as string ;
// n = parseInt(n);
// for (let i = n; i <= 10 * n; i = i + n) {
//   console.log(i);
// }




//Favroite Movie;
// let favMovie="Avatar";
// let guess=prompt("enter your movie name or Quit");
// while(guess!=favMovie){
//     if(guess=="Quit"){
//         break;
//     }
//     console.log("wong guess");
//     guess=prompt("Wrong guess movie name or Quit");
// }
// if(guess==favMovie){
//     console.log("cogratulation correct guess");
// }
// if(guess== "Quit"){
//     console.log("you quit");
// }


//loops with nested loop 
// let heros=[["ironMan","spiderMan","thor"],["SuperMan","Batman","flash"]];
// for(let i= 0;i<heros.length;i++){
//     console.log(heros[i]);
//     for(let j=0;j<heros[i].length;j++){
//         // console.log("j=",j,heros[i][j]);
//         console.log(`j = ${j}, ${heros[i][j]}`);
//     }
// }

//students;
// let students=[["aman",95],["shradha",94.4],["karan",100]];
// for(let i= 0;i<students.length;i++){
//     console.log(`student no ${i+1}`);
//     for(let j= 0;j<students[i].length;j++){
//         console.log(students[i][j]);
//     }
// }


//for of loop;
// let fruits =["mango","apple","banana","orange","licthi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "appnacollege"){
//     console.log(char);
// }

let heros=[["ironMan","spiderMan","thor"],["SuperMan","Batman","flash"]];
for(hero of heros){
    for(individual of hero){
        console.log(individual);
    }
}
