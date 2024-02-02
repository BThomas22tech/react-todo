import React from "react";
import style from "./TodoList.module.css";
import PropTypes from "prop-types"


function TodoListItem({ id, title, onRemoveTodo }) {
  TodoListItem.propTypes = {
    title: PropTypes.string.isRequired,
    
  }
  return (
    <li className={style.ListItem}>
      {title} {" "}
      <button type="button" onClick={()=>onRemoveTodo(id)}>
        remove
      </button>
    </li>
  );
}

export default TodoListItem;
