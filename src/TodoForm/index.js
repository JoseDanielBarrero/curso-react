import react from 'react';
import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const [task, setTask] = React.useState('');
    const {
        openModal,
        setOpenModal,
        todos,
        saveTodos,
        addTodo
    }=React.useContext(TodoContext);

    const createNewTask = () => {
        addTodo(task);
        setOpenModal(false);
    }

  return (
    <div className='TodoForm' onClick={(e) => {
        e.stopPropagation()
    }}>
        <p className='TodoForm__text'>¿Cual es tu tarea?</p>
        <input className="TodoForm__Input TodoForm--NewTask" 
            placeholder='Crear una tarea' value={task}
            onChange={(e) =>{
                setTask(e.target.value)
            }}
            onKeyDownCapture={(e)=> {
                if(e.keyCode === 13)
                {
                    createNewTask();
                }
                else if( e.keyCode === 27)
                {
                    setOpenModal(false);
                }
            }}
            autoFocus></input>
        <button className='TodoForm__Button TodoForm__Button--cancel' onClick={() => {
            setOpenModal(false);
        }}>Cancelar</button>
        <button className='TodoForm__Button' onClick={createNewTask}>Agregar Tarea</button>
    </div>
  )
}

export default TodoForm