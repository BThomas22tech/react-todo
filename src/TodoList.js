import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <ul>
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
