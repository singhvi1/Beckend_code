import { useState } from "react";

function init(){
    console.log("init was excuted");
    return Math.floor(Math.random()*10);
}
export default function Counter10(){
    //11
    let [count,setCount]=useState(init)//init() that is bad not use it always execute  whole function in each render 
    // let [count,setCount]=useState(0);
    console.log(` rerender outercount = ${count}`)
    let incrCount=()=>{
        //9
        // setCount(count + 1);// this is asynchrounous in nature ;
        // setCount(count + 1);

        //10
        setCount((currVal)=>{
            return currVal+1;
        })
        setCount((currVal)=>{
            return currVal +1;
        })

        //11.More about state
        // setCount(25);


        console.log(`inner count = ${count}`);
    }
    
    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={incrCount}>increaase Count</button>
        </div>
    )
}


/* 9.10.The problem is that when multiple state updates are made during a single event handler, React batches those updates and applies them asynchronously. Since the updates depend on the **current value** of the state at the time they are scheduled, both `setState(count + 1)` calls use the same initial value of `count` (e.g., `0`). As a result, React only applies the last update (`count + 1`), and you don't get the cumulative effect of `+1 + 1` as expected. 

Yes, exactly! The solution is to use a callback function (or functional update) in setState to access the most recent previous state. This ensures that each state update is based on the latest value of the state.*/

/*  11.The inner count logs 0 because the first setCount(25) hasn't applied yet (state updates are batched asynchronously).
After both setCount(25) calls, React applies the state change (count = 25) and re-renders the component.
The inner count logs 25 after the re-render, and no further updates happen because the state is already 25.
This is why you see inner count = 0 followed by inner count = 25 — React batches the updates and only performs one re-render with the final state value (25). */