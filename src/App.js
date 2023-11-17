import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const initialList = JSON.parse(localStorage.getItem("savedTodoList")) || []
  console.log(initialList)
  const [todoList, setTodoList] = React.useState(
    []
  );

  React.useEffect(() => {

    new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve({data:{todoList:initialList}})
      },2000)
    }).then((result)=>{setTodoList(result.data.todoList)})
  
  }, []);
 

  React.useEffect(() => {
    const todoListString = JSON.stringify(todoList);
    localStorage.setItem("savedTodoList", todoListString);
  }, [todoList]);

  function handleremoveTodo(id) {
    const removeTodo = todoList.filter((todo) => id !== todo.id);

    setTodoList(removeTodo);
  }

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <hr />
      <TodoList todoList={todoList} onRemoveTodo={handleremoveTodo} />
    </>
  );
}

export default App;
