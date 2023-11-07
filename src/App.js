import './App.css';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import CreateTodoButton from './CreateTodoButton';

const defaultTodos = [
  {text: 'Doblar Ropa', completed: false},
  {text: 'Subir los cambios al repo de git', completed: false},
  {text: 'metas noviembre', completed: false},
  {text: 'Depositar efectivo', completed: true}
]
function App() {
  return (
    <div className='App'>
      <TodoCounter total={25} completed={10}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}


export default App;
