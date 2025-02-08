// import { useState } from "react";
// export default function Counter() {

//     let [count,setCount]=useState(0);
//     // let Count = 0;
//     let inCount = ()=> {
//         setCount(count+1);
//         console.log(count);   //not working we need to use state
//     }
//     return (
//         <div>
//             <h1>States in react</h1>

//             <h3>
//                 Counts={count};
//             </h3>
//             <button onClick={inCount}>Inc Count</button>
//         </div>
//     )
// }


import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    console.log(`1.componenet is rerender and count = ${count}`)
    let IncCount=()=>{
        setCount(count+1);
        console.log("2.inside incount count =",count);
    }
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={IncCount}>IncrCount</button>
        </div>
    )
}