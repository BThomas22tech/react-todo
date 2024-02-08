import React from "react";
import style from "./TodoList.module.css";
import PropTypes from "prop-types"


TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  
}
function TodoListItem({ id, title, onRemoveTodo }) {
  return (
    <li className={style.ListItem}>
      {title} {" "}
      <button  className={style.btn}
type="button" onClick={()=>onRemoveTodo(id)}>
        remove
      </button>
    </li>
  );
}

export default TodoListItem;
