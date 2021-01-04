import React from "react";
import { Checkbox, IconButton, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
function Todo({ todo, toggleComplete, removeTodo }) {
    const GreenCheckbox = withStyles({
        root: {
            color: "var(--primary)",
            "&$checked": {
                color: "var(--primary)"
            }
        },
        checked: {}
    })((props) => <Checkbox color="default" {...props} />);

    let handleCheckboxClick = () => {
        toggleComplete(todo.id);
    };

    let handleRemoveClick = () => {
        removeTodo(todo.id);
    };

    return (
        <ListItem alignItems="flex-start" className="todo-item">
            <GreenCheckbox
                type="checkbox"
                checked={todo.completed}
                onClick={handleCheckboxClick}
            />
            <p
                className="todo-text"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}>
                {todo.task}
            </p>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;
