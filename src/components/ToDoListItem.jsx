import { useDispatch } from "react-redux";
import { removeToDo, toggleToDoComplete } from "../store/todoSlice";

const ToDoListItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleToDoComplete({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeToDo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default ToDoListItem;
