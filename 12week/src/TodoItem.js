(...)
import { TodoDispatchContext } from "./App"
(...)
const TodoItem = ({id,content,isDone,createdDate}) => {
    console.log('${id} TodoItem 업데이트');
    const {onUpdate,onDelete} = useContext(TodoDispatchContext);
    (...)
};
export default React.memo(TodoItem);