import "./App.css";
import { useState } from "react";
import TodoForm from "./Components/TodoForm";

function App() {
    const [todos, setTodos] = useState([]);
    return <div className="App">Hello Bud!</div>;
}

export default App;
