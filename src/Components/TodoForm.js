import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";
import { TextField, Button } from "@material-ui/core";

const CustomTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "var(--gray)"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "var(--gray)"
            },
            "&:hover fieldset": {
                borderColor: "var(--primary)"
            },
            "&.Mui-focused fieldset": {
                borderColor: "var(--primary)"
            }
        }
    }
})(TextField);

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    let handleTaskInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
        }
        setTodo({ ...todo, task: "" });
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <CustomTextField
                label="Task"
                name="task"
                type="task"
                variant="outlined"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button className="todo-button" type="submit">
                Submit
            </Button>
        </form>
    );
}

export default TodoForm;
