import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        //now updating the todos array by calling the function setTodo
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("")
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };


    //delete a task;
    // let deleteTodo=(id)=>{
    //     setTodos(todos.filter((todo)=>todo.id !=id));
    // }              //we should use callback function for be updated to presvious function
    let deleteTodo = (id) => {
        setTodos((prevTodos) => (prevTodos.filter((x) => x.id != id)))
    }
    let deleteTodo2 = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((x) => x.id != id)
        })
    }
    let deleteTodo3 = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((x) => x.id != id)
          )
    }



    /*let  UpperCaseAll=()=>{
        setTodos(todos.map((x)=>{
            return{
                ...x,
                task:x.task.toUpperCase()
            };
        }))
    }*/  //without callback function
    let UpperCaseAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((x) => {
                {/*x is each element  */ }
                return {
                    ...x,
                    task: x.task.toUpperCase()
                }
            })
        ))
    }
    let UpperCase = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((x) => {
                if (x.id === id) {
                    return {
                        ...x,
                        task: x.task.toUpperCase()
                    }
                } else {
                    return x;
                }
            })
        )
    }

    //mark as done 
    let toggleTaskDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                } else {
                    return todo;
                }
            })
        )
        console.log("working")
    }




    //keyStroked to input to submit;
    let handleKeydown=((event)=>{
        if(event.key=="Enter"){
            addNewTask();
        }
        });

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
                onKeyDown={handleKeydown} />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br><br></br>

            <hr />
            <h4>TodoList</h4>
            <ul>
                {todos.map((x) => {
                    {/*x is each element  */ }
                    return (
                        <li key={x.id}>
                            <span style={{
                                textDecoration: x.isDone ? "line-through" : "none"
                            }}
                            >{x.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(x.id)}>delete</button>
                            &nbsp;
                            <button onClick={() => UpperCase(x.id)}>UpperCase</button>
                            <button onClick={() => toggleTaskDone(x.id)}>DoneTask</button>


                        </li>
                    )
                })}
            </ul>
            <button onClick={() => UpperCaseAll()}>UpperCase All</button>
        </div>
    )
}