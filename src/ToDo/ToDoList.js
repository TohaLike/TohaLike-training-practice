import React, { useState } from 'react';
import ToDoo from './ToDo';
import ToDooForm from './ToDoForm';
import './ToDoApp.css';


function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
  };


  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setTodos(updateTodos);
  };


  return (
    <div>
      <h1>Список задач</h1>
      <ToDooForm onSubmit={addTodo} />
      <ToDoo todos={todos} completeToDo={completeTodo}
        removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default ToDoList