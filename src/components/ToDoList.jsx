import ToDoListItem from "./ToDoListItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
