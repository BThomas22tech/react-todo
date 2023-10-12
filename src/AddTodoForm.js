import React from "react";


function AddTodoForm(props) {
    const handleChange = (event_item) => {
        // console.log(event_item.target.value)
        props.onAddTodo(event_item.target.value);
    };
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
            <label htmlFor="todoTitle" id="todoTitle">
                Title
            </label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value ={todoTitle}
                onChange = {handleTitleChange}
                onSubmit={handleChange}
            ></input>
            <button type="submit">Add</button>
            </form>
)}


export default AddTodoForm;
