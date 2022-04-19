import React, { useState } from 'react';
import Todoitem from './todoitem';


function Todo () {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([{id:1, name:"증사찍기"}, {id:2, name:"머리자르기"}, {id:3, name:"ㅈㅈㄷ ㄱㅇㅈ"}])
  const onChange = (event) => setTodo(event.target.value)
  // console.log(todo)

  // todo 추가
  const addTodo = (event) => {
    event.preventDefault();
    // console.log(event)
    const newTodo = [...todos, {id: todos.length + 1, name: todo}]
    console.log(newTodo, '이건가?')
    setTodos(newTodo)
    setTodo("")
  }

  // const todolist = todos.map(item => 
  //   <li key={item.id}>
  //     {item.name}
  //   </li>
  // )

  const deleteTodo = (idx) => {
    const removeTodo = todos.filter(item => item.id !== idx)
    console.log(removeTodo, '삭제부분')
    console.log(idx, '나오나?')
    setTodos(removeTodo)
  }
  

  return (
    <div>
      <h1>뚜두뚜두</h1>
      <form>
        <input 
          onChange={onChange}
          type="text" 
          value={todo}
          placeholder="write todo"
        />
        <button onClick={addTodo}>Add to do</button>
      </form>
      <ul>
        {/* prop할 때 {}해서 보내기 */}
        {todos.map((item, index) => 
          <Todoitem item={item} deleteTodo={deleteTodo} key={index} />
        )}
      </ul>
    </div>
  )
}

export default Todo;