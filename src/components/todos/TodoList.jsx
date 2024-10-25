import { useSelector } from "react-redux";
import { TodoListWrap } from "./style";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { tododata } = useSelector((state) => state.todo);

  return (
    <TodoListWrap>
      {tododata.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </TodoListWrap>
  );
};

export default TodoList;
