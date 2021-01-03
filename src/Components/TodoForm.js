import React, { useState } from "react";

function TodoForm() {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: ""
    });

    return (
        <form>
            <input />
            <button />
        </form>
    );
}

export default TodoForm;
