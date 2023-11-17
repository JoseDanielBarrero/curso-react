import React from "react";
import { useLocalStorage } from "../App/useLocalStorage/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const {
      items: todos,
      saveItems: saveTodos,
      loading,
      error
    } = useLocalStorage('Todos_V1',[]);
    
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

    function addTodo (text) {
      if(text !='')
      {
          const newTodos = [...todos];
          newTodos.push({text: text, completed: false})
          saveTodos(newTodos)
      }
  }

    return(
        <TodoContext.Provider value={
            {
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
                todos,
                openModal,
                setOpenModal,
                addTodo
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}