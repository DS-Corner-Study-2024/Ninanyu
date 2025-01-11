/*아래 코드에서 useMemo를 활용하여 analyzeTodo 함수가 불필요하게 호출되는 것을 방지하도록 수정하세요.
const analyzeTodo = () => {
  console.log("analyzeTodo 함수 호출");
  const totalCount = todo.length;
  const doneCount = todo.filter((it) => it.isDone).length;
  const notDoneCount = totalCount - doneCount;
  return { 
  totalCount, 
  doneCount, 
  notDoneCount };
};
const { totalCount, doneCount, notDoneCount } = analyzeTodo();  */

console.log("analyzeTodo 함수 호출");
const totalCount = todo.length;
const doneCount = todo.filter((it) => it.isDone).length;
const notDoneCount = totalCount - doneCount;
return{
  totalCount,
  doneCount,
  notDoneCount,
};
}, [todo]);

const {totalCount, doneCount, notDoneCount} = analyzeTodo;
