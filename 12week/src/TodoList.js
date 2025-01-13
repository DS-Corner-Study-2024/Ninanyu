(...)
import { TodoStateContext } from "./App"
(...)
const TodoList = () => {
    const todo = useContext(TodoStateContext);
    (...)
};
export default TodoList;
