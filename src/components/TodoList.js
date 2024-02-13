import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(({ title, id }) => {
        return (
          <TodoListItem
            key={id}
            title={title}
            onRemoveTodo={() => onRemoveTodo(id)}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
