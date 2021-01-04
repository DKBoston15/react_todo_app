import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
    let handleCheckboxClick = () => {
        toggleComplete(todo.id);
    };

    let handleRemoveClick = () => {
        removeTodo(todo.id);
    };

    return (
        <div style={{ display: "flex" }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onClick={handleCheckboxClick}
            />
            <li
                style={{
                    color: "white",
                    textDecoration: todo.completed ? "line-through" : null
                }}>
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;
