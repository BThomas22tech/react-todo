import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || React);
  
  React.useEffect(() => {
    const todoListString = JSON.stringify(todoList);
    localStorage.setItem("savedTodoList", todoListString);
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
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
