const ToDoListItem = ({
  id,
  text,
  completed,
  toggleToDoComplete,
  removeToDo,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleToDoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeToDo(id)}>
        &times;
      </span>
    </li>
  );
};

export default ToDoListItem;
