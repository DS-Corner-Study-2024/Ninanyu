// 현재의 State 값을 2배로 증가시키는 버튼을 추가하라. (DOUBLE)

import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "DOUBLE":
            return state * 2;
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
                <button onClick={() => dispatch({ type: "DOUBLE" })}>2배</button>
                <button onClick={() => dispatch({ type: "INIT" })}>초기화</button>
            </div>
        </div>
    );
}

export default TestComp;