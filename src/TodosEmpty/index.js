import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";
import "./TodoEmpty.css"

function TodosEmpty() {
  return (
    <div className='TodoEmpty'>
      <FaExclamationCircle className='TodoEmpty__Icon'/>
      <p className='TodoEmpty__Text'>Puedes crear nuevas tareas usando el boton de la derecha.</p>
    </div>
  )
}

export default TodosEmpty