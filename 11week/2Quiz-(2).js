/* 아래 코드에서 React.memo를 사용하여 TodoItem이 불필요하게 리렌더링되지 않도록 수정하세요.
(아이템이 추가하는 상황, 아이템 제거, 체크박스 클릭, 검색폼에서의 검색에서도 TodoItem리렌더 되지 않도록 하세요. )

const TodoItem = ({ content, isDone, onUpdate, onDelete }) => {
  console.log(`TodoItem 렌더링: ${content}`);
  return (
    <div>
      <span>{content} {isDone ? "✔" : "❌"}</span>
      <button onClick={onUpdate}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};
export default TodoItem; */

import React from "react";

const TodoItem = React.memo(({ content, isDone, onUpdate, onDelete }) => {
  console.log(`TodoItem 렌더링: ${content}`);
  return (
    <div>
      <span>{content} {isDone ? "✔" : "❌"}</span>
      <button onClick={onUpdate}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
});

export default TodoItem;