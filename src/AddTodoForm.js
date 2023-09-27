import React from "react"

function AddTodoForm(props){
    const handleChange = (event_item) =>{
        props.onAddTodo(event_item.target.value)
        console.log(event_item.target.value)

    } 
    
return (
    <form>
        <label htmlFor="todoTitle" id="todoTitle">
            Title
        </label>
        <input type="text" id="todoTitle" onChange={handleChange}></input>
        <button>Add</button>
    </form>
)
}

export default AddTodoForm