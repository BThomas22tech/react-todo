import React from "react";

const todoList = [
    { id: 1, title: "complete assignment" },
    { id: 2, title: "pick up kid" },
    { id: 3, title: "sleep" }
];

function TodoList() {
    return (
        <ul>
            {todoList.map((item) => {
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
    );
}

export default TodoList;
