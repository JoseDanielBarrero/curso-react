import React from 'react';
import "./CreateTodoButton.css";
import {IoIosAddCircle, IoIosAddCircleOutline} from 'react-icons/io'

function CreateTodoButton(props) {

  function createNewTask() {
    const newTodos = [...props.todos];
    newTodos.push({text: 'Agregado por boton', completed: false})
    props.saveTodos(newTodos)
  }
  return (
    <IoIosAddCircle className='CreateButton' 
    onClick={() => 
      {
        createNewTask()
      }}>+</IoIosAddCircle>
  )
}

export default CreateTodoButton