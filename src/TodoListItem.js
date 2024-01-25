import React from "react";
import style from "./TodoList.module.css";

function TodoListItem({ id, title, onRemoveTodo }) {
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
