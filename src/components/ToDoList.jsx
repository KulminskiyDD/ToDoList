import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos, toggleToDoComplete, removeToDo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          toggleToDoComplete={toggleToDoComplete}
          removeToDo={removeToDo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
