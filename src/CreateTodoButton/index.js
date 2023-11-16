import React from 'react';
import "./CreateTodoButton.css";
import {IoIosAddCircle, IoIosAddCircleOutline} from 'react-icons/io'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

    const 
    {
      saveTodos, 
      todos,
      openModal,
      setOpenModal
    }=React.useContext(TodoContext);

  function createNewTask() {
    /* const newTodos = [...todos];
    const newText = "Agregado por boton" + " " + (newTodos.length+1);
    newTodos.push({text: newText, completed: false})
    saveTodos(newTodos) */
    setOpenModal(true);
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