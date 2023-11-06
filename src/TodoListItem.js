import React from "react";

function TodoListItem({ title, handleremoveTodo}) {
  return (
    <li>
      {title}
      <button type="button" onClick= {handleremoveTodo}> remove</button>
    </li>
  );
}

export default TodoListItem;
