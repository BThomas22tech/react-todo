import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [todoList, setTodoList] = React.useState([]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      console.log(data);
      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong", error.message);
    }
  };
  const postData = async (todo) => {
    const postUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          title: todo,
        },
      }),
    };
    try {
      const response = await fetch(postUrl, options);
      console.log(response, "response");

      if (!response.ok) {
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }
      const airtableData = await response.json();

      return airtableData;
    } catch (error) {
      console.error("something is wrong", error.message);
      return null;
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

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
    postData(newTodo.title);
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
