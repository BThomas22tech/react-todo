import React from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

function AddTodoForm({onAddTodo}) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        id="id"
        type="text"
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        children
        autoFocus
      >
        Title:
      </InputWithLabel>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
