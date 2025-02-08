import React from 'react';
import { useState } from "react"
import './Lottery.css'
import { genTicket, sum } from "./helper";
import Ticket from './Ticket';
import Button from './Button';

// export default function Lottery(){
//     let [ticket, setTicket]=useState(genTicket(3));
//     let isWinning=sum(ticket)==15;
//     let buyTicket=()=>{
//         setTicket(genTicket(3));
//     }
//     return (
//         <div>
//             <h1>Lottery_Games</h1>
//             <div className="ticket">
//             <span>{ticket[0]}</span>
//             <span>{ticket[1]}</span>
//             <span>{ticket[2]}</span>
//             </div><br />
//             {/* <button onClick={()=>buyTicket()}>Buy New Ticket</button> */   /**no argument in buy ticket so no need of arrow function */}
//             <button onClick={buyTicket}>Buy New Ticket</button>
//             <h3>{isWinning && "Congrulations you won the prize"}</h3>
//         </div>
//     )
// }



//$5_7.Lottery component

export default function Lottery({ n, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n))
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
            <Button action={buyTicket}/>
            <h3>{isWinning && "Congrulations you won the prize"}</h3>
        </div>
    )
}

