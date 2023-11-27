import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";
import { TodoContext } from '../TodoContext';
import "./TodoEmpty.css"

function TodosEmpty() {

  const {
    todos
  }=React.useContext(TodoContext);

  const renderText = () => {
    if(todos.length > 0){
      return "No se han encontrado resultados";
    }
    else {
      return "No hay tareas pendientes, tiempo de crear una nueva."
    }
  }
  return (
    <div className='TodoEmpty'>
      <FaExclamationCircle className='TodoEmpty__Icon'/>
      <p className='TodoEmpty__Text'>{renderText()}</p>
    </div>
  )
}

export default TodosEmpty