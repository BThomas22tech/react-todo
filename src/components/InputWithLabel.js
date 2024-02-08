import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    todoTitle: PropTypes.string.isRequired,
};
function InputWithLabel(props) {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <>
            <label label={props.title}>{props.children}</label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref={inputRef}
            ></input>
        </>
    );
}

export default InputWithLabel;
