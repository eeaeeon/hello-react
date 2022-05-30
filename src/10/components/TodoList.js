import React, { useEffect } from "react";

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

  // 부모 컴포넌트로 받은 리스트를 JSX로 구성하여 출력
  const mapList = list.map((item, index) => (
    <div key={index}>
      <input
        type="checkbox"
        id={index}
        checked={item.checked}
        onChange={onCheckBoxClick}
      />
      <label style={item.style}> {item.value} </label>
      <button onClick={() => onRemove(item.id)}>-</button>
    </div>
  ));

  return (
    <div>
      <ul>{mapList}</ul>
    </div>
  );
}

export default TodoList;
