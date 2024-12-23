import "./TodoItem.css";

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" />
            </div>
            <div className="title_col">할 일</div>
            <div className="data_col">{new DataTransfer().toLocaleDataString()}</div>
            <div className="btn_col">
                <button>삭제</button>
            </div>
        </div>
    );
};
export default TodoItem;