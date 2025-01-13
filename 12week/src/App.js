import React, {useMemo, useReducer, useCallback, useRef} from "react";
import TodoList from "./TodoList";
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App(){
    (...)
    const memoizedDispatches = useMemo(() => {
        return {onCreate,onUpdate,onDelete};
    },[]);

    return(
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}
export default App;