import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { AddTodoAction, RemoveTodoAction } from './action/TodoAction';

function App() {

  const [todo , setTodo] = useState()
  const dispatch = useDispatch()

 const Todo =  useSelector((state) => state.Todo)
 const { todos }= Todo

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App in Redux</h2>
        <form onSubmit={handleSubmit} >
          <input className='btn' placeholder='Enter a text' onChange={(e) => setTodo(e.target.value)} />
          <button className='btn-1' type='submit'>go</button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map((t)=> (
              <li key={t.id} className='singleTodo'>
            <span className='spn'>{t.todo}</span>
            <button onClick={() => removeHandler(t)} className='btn-2'>Delete</button>
          </li>
            ))
          }
          
        </ul>
      </header>
    </div>
  );
}

export default App;
