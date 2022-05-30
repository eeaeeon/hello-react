import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import styled from "styled-components";

const H1 = styled.h1`
  padding: 1rem 100px;
  background: rgb(100, 200, 200);
  color: white;
`;

const Input = styled.input`
  padding: 5px 100px;
  background: rgb(80, 80, 80);
  color: white;
  ::placeholder {
    color: rgb(200, 200, 200);
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background: rgb(200, 200, 200);
`;

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
    setList((list) => [...list, listData]); // 여기
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
      <H1>일정 관리</H1>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={data}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>+</Button>
      <TodoList
        list={list}
        onCheckBoxClick={onCheckBoxClick}
        onRemove={onRemove}
      />
    </div>
  );
}

export default TodoApp;
