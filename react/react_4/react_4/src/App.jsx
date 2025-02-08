import './App.css'
import TodoList from './TodoList'
import TodoRevision from './TodoRevision'
import Lottery from './Lottery'
import Ticket from './Ticket'
import { sum } from './helper'
function App() {
   let winCondition1=(ticket)=>{ // passing ticket as prob
      // return sum(ticket)==15;
      return ticket.every((num)=>num=== ticket[0]);
   }
   return(
    <>
    <TodoList/>
   <TodoRevision/>
   {/* <Lottery/> */}

   {/* <TicketNum num={5}/>
   <TicketNum num={6}/>
   <TicketNum num={3}/> */}

   {/* <Ticket ticket={[1,2,4]}/>
   <Ticket ticket={[1,2,4,4,4,5]}/>
   <Ticket ticket={[1,2,4,6,32,26,]}/> */}
   {/* <Lottery n={3}  winCondition={winCondition1}/> */}
   </>
   )
}

export default App
