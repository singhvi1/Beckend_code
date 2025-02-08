import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoRevision() {
    let [todos, setTodos] = useState([{ task: "work", id: uuidv4(), isDone: false }])
    let [newTodo, setNewTodo] = useState("");

    //now newTodo will collect the input as newTodo(saved in it by setNewTodo) and this will added in todos array via setTodos setsunction

    //handleKeydown,addNewTask,updateTodoValue

    let addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }])
        setNewTodo("")
    };
    let updateTodoValue = ((event) => {
        setNewTodo(event.target.value);
    });

    let handleKeydown=((event)=>{
            if(event.key=="Enter"){
                addNewTask();
            }
    });
        
     
    
    //now markAllAsDone to all
    /*let markAllAsDone=()=>{
        setTodos(todos.map((x)=>{
            return {
                ...x,
                task:x.task.toUpperCase()
            }
        }))
    }*/
    let markAllAsDone1=()=>{
        setTodos((prevTodo)=>(
            prevTodo.map((x)=>{
                return{
                    ...x,
                    // task:x.task.toUpperCase()
                    isDone:!x.isDone
                }
            })
        ))
    };
    let markAllAsDone=()=>{
        setTodos((prevTodo)=>
            prevTodo.map((x)=>({
                ...x,
                isDone:!x.isDone
            }))
        )
    };

    //delete one means iterating on one element of the array  :deleteTodo
    /*let deleteTodo1 =(id)=>{
        setTodos(todos.filter((x)=>x.id !=id))
    }*/  //without callback;
    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>{
            return (
                prevTodo.filter((x)=>x.id!=id)
            )
        })
    }
    let deleteTodo2=(id)=>{
        setTodos((prevtodo)=>
            (prevTodo.filter((x)=>x.id!=id)))           
    }
    let deleteTodo3=(id)=>{
        setTodos((prevtodo)=>{
            return prevtodo.filter((x)=>x.id !=id)
        })
    }

    //uppercase;
    let upperCase=(id)=>{
        setTodos((prevtodo)=>(
            prevtodo.map((x)=>{
                if(x.id ===id){
                    return {
                        ...x,
                        task:x.task.toUpperCase()   
                    }
                }else{
                    return x;
                }
            })
        ))
    }
    /*let upperCase1=((id)=>{
        setTodos(todos.map((x)=>{
            if(x.id ===id){
                return {
                    ...x,
                    task:x.task.toUpperCase()   
                }
            }else{
                return x;
            }
        })) //without call back
        
    })*/

    //mark as done 
    let markDone=(id)=>{
        setTodos(todos.map((x)=>{
            if(x.id==id){
                return{
                    ...x,
                    isDone:!x.isDone
                }
            }else{
                return x;
            }
        }))
    }
    
    
    
    
    return (
        <div>
            <input
                type="text"
                placeholder="Add your task"
                onKeyDown={handleKeydown}
                value={newTodo}
                onChange={updateTodoValue}
            /><br></br>

            <button onClick={addNewTask}>Add</button>            <br></br><br></br><br></br><br></br>

            <hr />
            <h2>Todo List</h2>
            <ul>
                {todos.map((x) =>
                    <li key={x.id}>
                        <span style={{ textDecoration: x.isDone ?"line-through": "none" }}>{x.task}
                        </span>

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(x.id)}>delete</button>&nbsp;&nbsp;
                        <button onClick={()=>upperCase(x.id)}>UpperCase</button>&nbsp;&nbsp;
                        <button onClick={()=>markDone(x.id)}>Mark Done</button>
                    </li>
                )}
            </ul>
            <button onClick={()=>markAllAsDone()}>markAllAsDone</button>


        </div>
    )
}