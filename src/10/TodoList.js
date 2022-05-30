import React, { useEffect } from "react";

// 할 일 목록 출력 컴포넌트
function TodoList(props) {
  const { list, onCheckBoxClick, onRemove } = props;

  useEffect(() => {
    console.log(list);
  }, [list]);

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
