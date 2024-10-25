import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/modules/todoSlice";
import TodoForm from "../../components/todos/TodoForm";
import TodoList from "../../components/todos/TodoList";
import { TodosWrap } from "./style";

const Todo = () => {
  const { tododata, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const filteredData = () => {
    switch (filter) {
      case "completed":
        return tododata.filter((item) => item.isChk);
      case "ongoing":
        return tododata.filter((item) => !item.isChk);
      default:
        return tododata;
    }
  };

  const visibleData = filteredData();

  return (
    <TodosWrap>
      <div className="container">
        <h1>할일을 입력하세요</h1>
        <TodoForm />
        <TodoList />
        <p className="contents">
          <button onClick={() => dispatch(setFilter("all"))}>전체</button>
          <button onClick={() => dispatch(setFilter("completed"))}>완료</button>
          <button onClick={() => dispatch(setFilter("ongoing"))}>진행중</button>
          <span>총개수 : {visibleData.length}</span>
        </p>
      </div>
    </TodosWrap>
  );
};

export default Todo;
