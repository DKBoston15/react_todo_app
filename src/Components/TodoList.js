import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <ul className="todo-list">
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
