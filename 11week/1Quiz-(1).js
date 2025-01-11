//기존에 구현한 TestComp의 카운터에 2씩 증가하고 감소하는 버튼을 추가하라.
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+1</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-1</button>
                <button onClick={() => dispatch({ type: "INCREASE", data: 2 })}>+2</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 2 })}>-2</button>
                <button onClick={() => dispatch({ type: "INIT" })}>초기화</button>
            </div>
        </div>
    );
}

export default TestComp;
