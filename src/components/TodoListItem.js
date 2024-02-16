import React from "react";
import style from "./TodoList.module.css";
import PropTypes from "prop-types";

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

function TodoListItem({title, onRemoveTodo }) {
  return (
    <li className={style.ListItem}>
      {title}
      <button
        className={style.btn}
        type="button"
        onClick={() => onRemoveTodo()}
      >
        remove
      </button>
    </li>
  );
}

export default TodoListItem;
