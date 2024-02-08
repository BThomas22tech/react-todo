import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types"

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}
function TodoList(props) {
  return (
    <ul >
      {props.todoList.map(({ id, title }) => {
        return (
          <TodoListItem
            key={id}
            title={title}
            onRemoveTodo={() => props.onRemoveTodo(id)}
          />
          
        );
      })}
    </ul>
  );
}

export default TodoList;
