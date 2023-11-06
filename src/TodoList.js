
import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList(props) {

    return (
        <ul>
            {props.todoList.map(({id,title,onRemoveTodo})=> {
                return(
                <TodoListItem 
                key={id} 
                title={title}
                onRemoveTodo = {onRemoveTodo}
                />
                )
            })}
        </ul>
    );
}

export default TodoList;
