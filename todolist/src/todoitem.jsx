import React, { useState } from 'react';

function Todoitem ({item, index, deleteTodo}) {
  const [editBtn, setEditBtn] = useState(false);
  const [editTodo, setEditTodo] = useState(item.name);
  const [propItem, setPropItem] = useState(item);
  const changeTodo = (event) => setEditTodo(event.target.value)

  // 수정 버튼 상태 변경
  const changeEditBtn = (item) => {
    setEditBtn(true)
  }

  // 저장하고 수정 버튼 상태 변경
  const save = (idx) => {
    setPropItem({...propItem, name: editTodo})
    console.log(idx, '저장 버튼')
    setEditBtn(false)
  }

  // keyup enter event 지정
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      save(item);
    }
  }

  return (
    <li>
      {/* item.name 에서 propitem으로 바꿈 안 바꾸면 수정해도 안 바뀜 */}
      {propItem.name}
      {editBtn === true && 
        <input 
          type="text"
          onChange={changeTodo}
          // keyup event 지정
          onKeyUp={handleEnter}
        />}
      {editBtn === false && <button onClick={() => changeEditBtn(item)}>수정</button>}
      {editBtn === true && <button onClick={() => save(item)}>저장</button>}
      
      <button onClick={() => deleteTodo(item.id)}>삭제</button>
    </li>
  )
}

export default Todoitem ;