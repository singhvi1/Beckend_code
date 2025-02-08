// import { useState } from "react";
// export default function LikeButton(){
//     let [isLiked,setIsLiked]=useState(false);
//     let[count,setCount]=useState(0);
//     let toggleLike= ()=>{
//        setIsLiked(!isLiked);
//        setCount(count+1);
//     }
//     return (
//         <div>
//             <p>{count}</p>
//             <p onClick={toggleLike}>
//                 {isLiked ?(<i className="fa-regular fa-heart" ></i>):(<i className="fa-solid fa-heart"></i>)}  
//             </p>
//         </div>
//     )
// }  

import { use } from "react";
import { useState } from "react";

export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let [count,setCount]=useState(0);

    
    let toggleLike=()=>{
        setIsLiked(!isLiked);   
        setCount(count+1);
        console.log("like button pressed",count);
    }
    return(
        <div>
            <p>Count={count}</p>
            <button onClick={toggleLike} style={{background: "none", border: "none", cursor: "pointer"}}>
                {isLiked ? (<i className="fa-solid fa-heart"></i>): (<i className="fa-regular fa-heart"></i>)} </button>
        </div>
    )
}

