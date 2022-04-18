import React, { useState } from 'react';

function TodoItem({item, onDelete}) {
  const [editBtn, setEditBtn] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(item.name);
  const onUpdateTodo = (event) => setUpdateTodo(event.target.value);
  const [propItem, setPropItem] = useState(item)
  
  
  // 수정 내용 입력
  const editTodo = (item) => {
    console.log(updateTodo, '이건가?')
    setEditBtn(true)
  }

  // 저장하고 보여주기
  const save = (idx) => {
    // const updateTodos = 
    setPropItem({...propItem, name: updateTodo})
    console.log(idx)
    // setTodos(updateTodos)
    setEditBtn(false)
  }

  return (
    <li>
      {propItem.name}
      {editBtn === true &&
        <input 
          onChange={onUpdateTodo}
          type="text"
          value={updateTodo}
        />
      }
      {editBtn === false && <button onClick={() => editTodo(item)}>수정</button>}
      {editBtn === true && <button onClick={() => save(item)}>save</button>}
      <button onClick={() => onDelete(item.id)}>delete</button>
    </li>
  )
}

export default TodoItem;