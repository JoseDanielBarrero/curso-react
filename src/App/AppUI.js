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
    deleteTodo,
    loading,
    error,
    saveTodos, 
    todos
  }
) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch
        searchValue={searchValue} setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading && <p>Cargando ...</p>}
        {error && <p>Recarga la pagina, parece que es un error</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primera Tarea</p>}
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
      <CreateTodoButton
        saveTodos={saveTodos}
        todos={todos}
      />
    </>
  )
}

export default AppUI