import React from 'react'
import CreateTodoButton from '../CreateTodoButton'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoList/TodoItem'
import { TodoList } from '../TodoList/TodoList'
import { TodoSearch } from '../TodoSearch'
import TodosEmpty from '../TodosEmpty'
import TodosError from '../TodosError'
import TodosLoading from '../TodosLoading'

function AppUI() {

  const{
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
  }=React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <TodosEmpty/>}
        {(!loading && !error) && searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUI