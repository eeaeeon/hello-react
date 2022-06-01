import React from "react";

function TodoListItem({
  index,
  id,
  checked,
  style,
  value,
  onCheckBoxClick,
  onRemove,
}) {
  return (
    <div key={index}>
      <input
        type="checkbox"
        id={index}
        checked={checked}
        onChange={onCheckBoxClick}
      />
      <label style={style}> {value} </label>
      <button onClick={() => onRemove(id)}>-</button>
    </div>
  );
}

export default TodoListItem;
