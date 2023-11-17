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