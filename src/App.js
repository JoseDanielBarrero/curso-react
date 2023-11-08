import './App.css';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import React from 'react';



function App() {

  const defaultTodos = [
    {text: 'Doblar Ropa', completed: false},
    {text: 'Subir los cambios al repo de git', completed: false},
    {text: 'metas noviembre', completed: false},
    {text: 'Depositar efectivo', completed: true}
  ]
  // Estados

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const completedTodos = todos.filter(todo => todo.completed).length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    }
  )


  return (
    <>
      <TodoCounter total={todos.length} completed={completedTodos}/>
      <TodoSearch 
        searchValue={searchValue} setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}


export default App;
