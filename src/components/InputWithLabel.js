import React, { useRef, useEffect } from "react";
import style from "./TodoList.module.css"

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
            <label className={style.titleSpacing} label={title}>{children}
            </label>
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
