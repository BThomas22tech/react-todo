import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList,setTodoList] = React.useState([])

  
  React.useEffect(() =>{
    localStorage.setItem('savedTodoList',todoList);
  },[todoList])


  function addTodo(newTodo){
    setTodoList([...todoList,newTodo])
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      
      <hr />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
