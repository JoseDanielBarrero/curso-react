import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {

  const{
    totalTodos,
    completedTodos,
  }=React.useContext(TodoContext);

  function renderCounter(){
    if(totalTodos==0){
      return(<p className='TodoCounter'>No tienes tareas pendientes!</p>)
    }
    if(completedTodos==totalTodos ){
      return(<p className='TodoCounter'>Felicidades! Has completado todas tus Tareas!</p>)
    }
    
    return(<p className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas</p>)
  }

  return ( renderCounter() )
}

export {TodoCounter};