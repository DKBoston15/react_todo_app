import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

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

    return (
        <div className="App">
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
