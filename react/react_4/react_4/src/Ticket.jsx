import React from 'react';
import TicketNum from './TicketNum.jsx';
import './Ticket.css';

export default function Ticket({ticket}) {
  return (
    <div className='Ticket'>
        <h4>Ticket</h4>
        {/**here we need to pass the each number in TicketNum from the array ticket  */}

        {/* <TicketNum num={ticket[0]}/>
        <TicketNum num={ticket[1]}/>
        <TicketNum num={ticket[2]}/> */}
        {/*since it is a hard code so we will use map method to add (and use filter method to delete);*/}


        {ticket.map((num,idx)=>{
            return <TicketNum num={num} key={idx}/>
        })}

    </div>
  )
}
