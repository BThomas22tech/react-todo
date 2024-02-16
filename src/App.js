import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import style from "./components/TodoList.module.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });

      const sortDescending = (objectA, objectB) => {
        const titleA = objectA.title;
        const titleB = objectB.title;

        if (titleA < titleB) {
          return 1;
        }
        if (titleA > titleB) {
          return -1;
        }
        if (titleA === titleB) {
          return 0;
        }
        console.log(titleA, "desc");
      };
      todos.sort(sortDescending);

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Something went wrong", error.message);
    }
  };
  const postData = async (title) => {
    const postUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          title: title,
        },
      }),
    };
    try {
      const response = await fetch(postUrl, options);

      if (!response.ok) {
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }
      const airtableData = await response.json();

      return airtableData;
    } catch (error) {
      console.error("something is wrong", error.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", todoListString);
    }
  }, [isLoading, todoList]);

  function handleRemoveTodo(id) {
    const deleteURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;
    fetch(deleteURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete record from Airtable");
        }
        console.log("Record deleted successfully from Airtable");
      })
      .catch((error) => {
        console.error("Error deleting record from Airtable:", error);
      });
    const removeTodo = todoList.filter((todo) => id !== todo.id);

    setTodoList(removeTodo);
  }

  function addTodo(newTodo) {
    postData(newTodo.title);
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className={style.border}>
                <h1 className={style.hcenter}>{process.env.REACT_APP_TABLE_NAME}</h1>
                <AddTodoForm onAddTodo={addTodo} />

                <hr />
                {isLoading ? (
                  "Loading..."
                ) : (
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={handleRemoveTodo}
                  />
                )}
              </div>
            }
          ></Route>
          <Route
            path="/new"
            element={
              <>
                <h1>New Todo List</h1>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
