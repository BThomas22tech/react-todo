import React from "react";

function AddTodoForm() {
    return (
        <form>
            <label htmlFor="todoTitle" id="todoTitle">
                Title
            </label>
            <input type="text" id="todoTitle"></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;
