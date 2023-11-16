import React from 'react';
import "./CreateTodoButton.css";
import {IoIosAddCircle, IoIosAddCircleOutline} from 'react-icons/io'

function CreateTodoButton(props) {

  function createNewTask() {
    const newTodos = [...props.todos];
    const newText = "Agregado por boton" + " " + (newTodos.length+1);
    newTodos.push({text: newText, completed: false})
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