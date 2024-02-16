import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css"
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={style.ulStyle}>
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
