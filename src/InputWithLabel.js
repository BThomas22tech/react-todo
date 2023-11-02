function InputWithLabel(props){
return(<>
<label htmlFor="todoTitle" id="todoTitle">
                Title
            </label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value ={props.todoTitle}
                onChange = {props.handleTitleChange}
            ></input>
</>)

}

export default InputWithLabel