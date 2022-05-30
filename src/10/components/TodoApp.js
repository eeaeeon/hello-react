import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import TodoAppStyle from "../css/TodoAppStyle";

// 할 일 목록 메인 컴포넌트
function TodoApp() {
  const [data, setData] = useState(""); // 입력 값
  const [list, setList] = useState([]); // 추가한 할 일 목록

  const nextId = useRef(0);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data.length === 0) return;

    const listData = {
      id: nextId.current,
      value: data,
      checked: false,
      style: {},
    };
    setList((list) => [...list, listData]);
    setData("");
    nextId.current += 1;
  };

  const onCheckBoxClick = (e) => {
    const newList = [...list];
    newList[e.target.id].checked = e.target.checked;
    if (e.target.checked) {
      newList[e.target.id].style = {
        textDecoration: "line-through",
        color: "gray",
      };
    } else {
      newList[e.target.id].style = {};
    }

    setList(newList);
  };

  const onRemove = (id) => {
    const newList = [...list.filter((item) => item.id !== id)];

    setList(newList);
  };

  return (
    <div>
      <TodoAppStyle.H1>일정 관리</TodoAppStyle.H1>
      <TodoAppStyle.Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={data}
        onChange={handleChange}
      />
      <TodoAppStyle.Button onClick={handleClick}>+</TodoAppStyle.Button>
      <TodoList
        list={list}
        onCheckBoxClick={onCheckBoxClick}
        onRemove={onRemove}
      />
    </div>
  );
}

export default TodoApp;
