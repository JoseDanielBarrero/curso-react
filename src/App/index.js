import './App.css';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import { TodoItem } from '../TodoList/TodoItem';
import CreateTodoButton from '../CreateTodoButton';
import React from 'react';
import { useLocalStorage } from './useLocalStorage/useLocalStorage';
import AppUI from './AppUI';

function App() {

  const defaultTodos = [
    {text: 'Doblar Ropa', completed: false},
    {text: 'Subir los cambios al repo de git', completed: false},
    {text: 'metas noviembre', completed: false},
    {text: 'Depositar efectivo', completed: true}
  ]

  // Estados

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, saveTodos] = useLocalStorage('Todos_V1',defaultTodos);
  
  // Estados derivados 

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    }
  )

  ///////////////////////////////////////////////
  // Funciones
  ///////////////////////////////////////////////

  
  function completeTodo (text) {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text ==text);
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    saveTodos(newTodos);
  }

  function deleteTodo (text) {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text ==text);
    newTodos.splice(indexTodo,1);
    saveTodos(newTodos);
  }


  return (
    <>
      <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}      
        />
    </>
  );
}


export default App;
