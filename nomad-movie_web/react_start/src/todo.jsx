import React, { useState } from 'react';
import TodoItem from './todoItem';

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{id:1, name: "react"}, {id:2, name:"typeScript"}, {id:3, name: "recoil"}]);
  const onChange = (event) => setTodo(event.target.value);

  // console.log(todo)
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    console.log(todo, 'todo')
    const newTodo = {id: todos.length + 1, name: todo}
    setTodos((currentArray) => [...currentArray, newTodo])
    setTodo("");
  }
  // console.log(todos)
  
  const onDelete = (idx) => {
    const deldteTodos = todos.filter(item => item.id !== idx)
    console.log(deldteTodos, '여기')
    setTodos(deldteTodos)
    console.log(idx, 'idx 여기')
  }

  
  return (
    <div>
      <h1>My todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={todo} 
          type="text" 
          placeholder='write your to do'
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => 
          <TodoItem item={item} key={index} onDelete={onDelete} />
        )}
      </ul>
    </div>
  )
}

export default Todo;