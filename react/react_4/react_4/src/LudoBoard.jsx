import { useState } from "react";
export default function LudoBoard(){
    //blue


    /*let[blueMove,setBlueMove]=useState(0);
    let[yellowMove,setyellowMove]=useState(0);
    let[greenMove,setgreenMove]=useState(0);
    let[redMove,setredMove]=useState(0);*/  // these are primitive state variable or individual state variables ; but we can make objects for this 

    let [moves, setMoves]=useState({blue:0,red:0,yellow:0,green:0}); 

    let [arr,setArr]=useState(["no moves"])  //now trying to push array we need to comment update blue so that it not  trigger rrerender 
    

    /*let updateBlue=()=>{
        setMoves({...moves , blue:moves.blue +1 })
        console.log(moves.blue);
    }*/   // but we use call back function  to get curr prev state not initial
    
    let updateBlue=()=>{
        console.log(`moves.blue=${moves.blue}`); 
        // setMoves((prevMoves)=>{                   //comment while 2_arrays and state
        //     return {...prevMoves,blue:prevMoves.blue+1}
        // })  
        
        //2
        /*arr.push("blue moves");
        setArr(arr);*/  //direct mutation not allowed 
        setArr([...arr," updating obj again"])
        console.log(arr);       
    }
    let updateyellow=()=>{
        console.log(`moves.yellow=${moves.yellow}`); 
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1}
        })          
    }
    let updategreen=()=>{
        console.log(`moves.green=${moves.green}`); 
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1}
        })          
    }
    let updatered=()=>{
        console.log(`moves.red=${moves.red}`); 
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1}
        })          
    }
    return (
        <div>
            <p>Game Begin!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{background:"blue",color:"black"}} onClick={updateBlue}>+1</button>
                <p>yellow moves ={moves.yellow}</p>
                <button style={{background:"yellow",color:"black"}} onClick={updateyellow}>+1</button>
                <p>green moves ={moves.green}</p>
                <button style={{background:"green",color:"black"}} onClick={updategreen}>+1</button>
                <p>red moves ={moves.red}</p>
                <button style={{background:"red",color:"black"}} onClick={updatered}>+1</button>

            </div>


        
        </div>
    )
}