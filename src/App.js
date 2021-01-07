import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import NavDrawer from "./Components/NavDrawer";

import { Card, CardActions, CardContent, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEY)
        );
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    let addTodo = (todo) => {
        setTodos([todo, ...todos]);
    };

    let toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    };

    let removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const [open, setToggleDrawer] = useState(false);
    let toggleDrawer = () => {
        setToggleDrawer(!open);
    };

    return (
        <div className="App">
            <Button onClick={toggleDrawer} className="menu-button">
                <Menu fontSize="large" />
            </Button>
            <NavDrawer toggleDrawer={toggleDrawer} open={open} />
            <div className="cardWrapper">
                <Card className="todo-card">
                    <h1>Todos</h1>
                    <CardContent>
                        <TodoForm addTodo={addTodo} />
                    </CardContent>
                    <CardActions>
                        <TodoList
                            todos={todos}
                            toggleComplete={toggleComplete}
                            removeTodo={removeTodo}
                        />
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default App;
