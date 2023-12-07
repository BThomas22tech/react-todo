import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [todoList, setTodoList] = React.useState([]);

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    // const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;
    console.log((process.env.REACT_APP_AIRTABLE_BASE_ID))
    // try {
    //   const response = await fetch(url, options);
    //   if (!response.ok) {
    //     const message = `Error has ocurred:${response.status}`;
    //     // throw new Error(message);
    //     console.log(message);
    //   }
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error(error.message);
    // }
  }

  React.useEffect(() => {
    fetchData()
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: {
    //         todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
    //       },
    //     });
    //   }, 2000);
    // }).then((result) => {
    //   setTodoList(result.data.todoList);
    //   setIsLoading(false);
    // });
  });

  React.useEffect(() => {
    if (isLoading === false) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", todoListString);
    }
  }, [isLoading, todoList]);

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
      {isLoading ? (
        "Loading..."
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={handleremoveTodo} />
      )}
    </>
  );
}

export default App;
