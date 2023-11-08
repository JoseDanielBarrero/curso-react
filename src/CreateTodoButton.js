import React from 'react';
import "./CreateTodoButton.css"

function CreateTodoButton() {

  function createNewTask(event) {
    
  }
  return (
    <button className='CreateButton' onClick={(event) => {
      console.log(event)
    }}>+</button>
  )
}

export default CreateTodoButton