import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";

/* ******************* */
/* UI 표시 컴포넌트       */
/* 할 일 목록 출력 컴포넌트 */
/* ******************* */

function TodoList(props) {
  const { list, onCheckBoxClick, onRemove } = props;

  // 디버깅용 로그
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <TodoListItem
            index={index}
            id={item.id}
            checked={item.checked}
            style={item.style}
            value={item.value}
            onCheckBoxClick={onCheckBoxClick}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
