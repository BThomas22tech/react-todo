import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );
  React.useEffect(() => {
    const todoListString = JSON.stringify(todoList);
    localStorage.setItem("savedTodoList", todoListString);
  }, [todoList]);

  return [todoList, setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

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
