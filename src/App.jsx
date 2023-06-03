import "./App.css";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addToDo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText("");
  };

  const removeToDo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleToDoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };
  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addToDo} />
      <ToDoList
        todos={todos}
        toggleToDoComplete={toggleToDoComplete}
        removeToDo={removeToDo}
      />
    </div>
  );
}

export default App;
