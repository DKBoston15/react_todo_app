import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
function Todo({ todo, toggleComplete, removeTodo }) {
    let handleCheckboxClick = () => {
        toggleComplete(todo.id);
    };

    let handleRemoveClick = () => {
        removeTodo(todo.id);
    };

    return (
        <ListItem className="todo-item">
            <Checkbox
                type="checkbox"
                checked={todo.completed}
                onClick={handleCheckboxClick}
            />
            <Typography
                variant="body1"
                style={{
                    color: "white",
                    textDecoration: todo.completed ? "line-through" : null
                }}>
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;
