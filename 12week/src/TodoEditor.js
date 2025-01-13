import { useContext } from "react";
import { TodoDispatchContext } from "./App";
(...)

const TodoEditor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    (...).
};
export default TodoEditor;