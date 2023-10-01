import React from "react";

function AddTodoForm(props) {
    const handleChange = (event_item) => {
        // console.log(event_item.target.value)
        props.onAddTodo(event_item.target.value);
    };

    function handleAddTodo(events) {
        events.preventDefault();
        const todoTitle = events.target.elements.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        events.target.reset();
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
                onChange={handleChange}
            ></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
