import { useState } from "react";
import './todo.css';

export default function Todo() {
  const [todos, setTodos] = useState([{ task: "Eat", priority: "low", completed: false }]);
  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setNewPriority] = useState("low");

  const addNewTask = () => {
    setTodos([...todos, { task: newTodo, priority: newPriority, completed: false }]);
    setNewTodo(""); // Clear input after adding the task
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const toggleNightMode = () => {
    document.body.classList.toggle("night-mode");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <button className="night-mode-toggle" onClick={toggleNightMode}>🌙</button>

      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <br />
      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h4>TodoList</h4>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`${todo.priority} ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTaskCompletion(index)}
          >
            {todo.task}
          </li>
        ))}
      </ul>

      <button className="fab" onClick={addNewTask}>+</button>
    </div>
  );
}
