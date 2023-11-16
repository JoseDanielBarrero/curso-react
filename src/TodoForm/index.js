import react from 'react';
import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const [task, setTask] = React.useState('');
    const {
        openModal,
        setOpenModal,
        todos,
        saveTodos
    }=React.useContext(TodoContext);

    const createNewTask = () => {

        const newTodos = [...todos];
        newTodos.push({text: task, completed: false})
        saveTodos(newTodos)
        setOpenModal(false)
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
            }}></input>
        <button className='TodoForm__Button' onClick={createNewTask}>Agregar Tarea</button>
    </div>
  )
}

export default TodoForm