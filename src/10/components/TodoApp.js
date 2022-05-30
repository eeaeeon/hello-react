import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import TodoAppStyle from "../css/TodoAppStyle";

/* ******************* */
/* 액션 기능을 가진 컴포넌트 */
/* 할 일 목록 메인 컴포넌트 */
/* ******************* */

function TodoApp() {
  const [data, setData] = useState(""); // 입력 값
  const [list, setList] = useState([]); // 추가한 할 일 목록

  // 임시 변수로 아이디 설정
  const nextId = useRef(0);

  // input 값 저장
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // 추가 버튼 클릭 시 입력한 데이터를 배열에 저장
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

  // 체크박스가 클릭된 배열 데이터를 찾아 스타일 변경하고 배열에 다시 저장
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

  // 삭제 버튼 클릭 시 배열 목록에서 선택한 데이터 제거
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
