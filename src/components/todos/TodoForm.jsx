import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/modules/todoSlice"; // Redux 액션 가져오기
import { TodoFormWrap } from "./style.js";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    const newId = Date.now(); // ID 생성 로직 변경
    dispatch(addTodo({ id: newId, text, isChk: false }));
    setText("");
  };

  return (
    <TodoFormWrap onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">+</button>
    </TodoFormWrap>
  );
};

export default TodoForm;
