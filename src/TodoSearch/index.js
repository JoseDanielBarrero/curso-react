import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const{
    addTodo
  }=React.useContext(TodoContext);

  const [task, setTask] = React.useState('')
  const createNewTask = () => 
  {
      addTodo(task);
      setTask('');
  }
  return (
    <div className='TodoSearch__Container'>
      <input className='TodoSearch' placeholder='Agregar una tarea' 
        value={task}
          onChange={(e) =>{
            setTask(e.target.value)
        }}
        onKeyDownCapture={(e)=> {
            if(e.keyCode === 13)
            {
                createNewTask();
            }
        }}/>
      <button className='AddTaskButton' onClick={() => {createNewTask()}}>+</button>
    </div>
    
  )
}

export  {TodoSearch}