import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <ul
            style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
            {todos.map((todo) => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
