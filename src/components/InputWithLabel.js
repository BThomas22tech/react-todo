import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    todoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
};

function InputWithLabel({title,children,todoTitle,handleTitleChange}) {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <>
            <label label={title}>{children}</label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                ref={inputRef}
            ></input>
        </>
    );
}

export default InputWithLabel;
