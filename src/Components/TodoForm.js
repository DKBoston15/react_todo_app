import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TextField, Button } from "@material-ui/core";

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
            <TextField
                label="Task"
                name="task"
                type="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;
