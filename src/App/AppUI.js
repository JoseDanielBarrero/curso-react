import React from 'react'
import CreateTodoButton from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoList/TodoItem'
import { TodoList } from '../TodoList/TodoList'
import { TodoSearch } from '../TodoSearch'

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}
) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue={searchValue} setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  )
}

export default AppUI