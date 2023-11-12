import React from "react";

function TodoListItem({ id, title, onRemoveTodo }) {
  return (
    <li>
      {title} <span></span>
      <button type="button" onClick={()=>onRemoveTodo(id)}>
        remove
      </button>
    </li>
  );
}

export default TodoListItem;
