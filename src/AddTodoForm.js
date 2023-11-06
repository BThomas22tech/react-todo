import React from "react";
import InputWithLabel from "./InputWithLabel";


function AddTodoForm(props) {
    const [todoTitle,setTodoTitle] = React.useState([])

    function handleTitleChange(event)  {
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)

    }
    function handleAddTodo(event) {
        event.preventDefault();
        props.onAddTodo({
            title:todoTitle,
            id:Date.now()
        });
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
            id = "id"
            type = "text"
            todoTitle = {todoTitle}
            handleTitleChange={handleTitleChange}
            autoFocus
            >Title: </InputWithLabel>
            <button type="submit">Add</button>
            </form>
)}


export default AddTodoForm;
