import "./App.css";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";
import { useDispatch } from "react-redux";
import { addToDo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addToDo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <ToDoList />
    </div>
  );
}

export default App;
