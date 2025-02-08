function genTicket(n){// here we will generate the n digit array of randNum
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10); //gen from 0 to 9;
    }
    return arr;
}

//to know it is wining or not 
function sum(arr){
    return arr.reduce((sum,curr)=>sum+curr,0);
}

export {genTicket,sum};