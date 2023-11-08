import React from 'react';
import './TodoCounter.css';


function TodoCounter({total, completed}) {

  function renderCounter(){
    if(total==0){
      return(<p className='TodoCounter'>No tienes tareas pendientes!</p>)
    }
    if(completed==total ){
      return(<p className='TodoCounter'>Felicidades! Has completado todas tus Tareas!</p>)
    }
    
    return(<p className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> Tareas</p>)
  }

  return ( renderCounter() )
}

export {TodoCounter};