import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  const todoList = [{id:1,title:"complete assignment",},{id:2,title:"pick up kid"},{id:3,title:"sleep"}]


  return (
    <div>
      <h1>
        Todo List
      </h1>
      <AddTodoForm />
      <hr />
      <TodoList todoList={todoList}/>
      
    </div>
  );
}

export default App;
