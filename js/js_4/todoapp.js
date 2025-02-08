let todo=[];

let req=prompt("enter your request ");
while(true){
    //quit
    if(req=="quit"){
        console.log("quit");
        break;
    }
    //list;
    if(req=="list"){
        console.log("-----------")
        for(let i= 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------")

    }
    //add
    else if(req=="add"){
        let task= prompt("please enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let indx=prompt("enter the task index")
        todo.splice(indx,1);
        console.log("task deleted");
    }else{
        console.log("wrong refrence"); 
        break;
    }

    req=prompt("next request ");
}