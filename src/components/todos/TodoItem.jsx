import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  editTodo,
} from "../../store/modules/todoSlice";
import { FaTrashRestore, FaPen } from "react-icons/fa";

const TodoItem = ({ item }) => {
  const { id, text, isChk } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo({ id, newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={isChk ? "on" : ""}>
      <input type="checkbox" checked={isChk} onChange={handleToggle} />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        text
      )}
      <p className="btn">
        <button onClick={handleEdit}>
          <FaPen />
        </button>
        <button onClick={handleRemove}>
          <FaTrashRestore />
        </button>
      </p>
    </li>
  );
};

export default TodoItem;
