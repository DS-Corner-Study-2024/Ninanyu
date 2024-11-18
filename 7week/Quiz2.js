/*2. 카운터 앱에서, 짝수일 때만 버튼이 활성화되도록 만드세요. 이때, useEffect를 사용해 count 값이 변경될 때마다 버튼의 활성화 여부를 동적으로 관리하세요. (disabled 속성 사용)
힌트: useEffect를 통해 count가 변경될 때마다 버튼의 활성화 상태를 업데이트합니다.
*/

//App.js 파일일
import { useRef,useEffect,useState } from 'react';
import './App.css';
import Controller from "./component/Controller"
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count+value);
  }
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value ={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}
        disabled={count%2===0}/>
      </section>
    </div>
  );
}

// Controller 파일
import {handlesetCount, disabled} from 'react';

const Controller = ({handleSetCount, disabled}) => {
    return(
        <div>
            <button onClick={() => handleSetCount(-1) disabled={disabled}}>-1</button>
            <button onClick={() => handleSetCount(-10) disabled={disabled}}>-10</button>
            <button onClick={() => handleSetCount(-100) disabled={disabled}}>-100</button>
            <button onClick={() => handleSetCount(100) disabled={disabled}}>+100</button>
            <button onClick={() => handleSetCount(10) disabled={disabled}}>+10</button>
            <button onClick={() => handleSetCount(1) disabled={disabled}}>+1</button>
        </div>
    );
};
export default Controller;

/* 정답 코드
Viewer.js

import { useState, useEffect } from "react";

const Controller = ({ handleSetCount, count }) => {
  const [isEven, setIsEven] = useState(true);  // 버튼 활성화 여부

  useEffect(() => {
    setIsEven(count % 2 === 0);  // count가 짝수일 때만 버튼 활성화
  }, [count]);  // count 값이 변경될 때마다 실행

  return (
    <div>
      <button onClick={() => handleSetCount(-1)} disabled={!isEven}>-1</button>
      <button onClick={() => handleSetCount(-10)} disabled={!isEven}>-10</button>
      <button onClick={() => handleSetCount(-100)} disabled={!isEven}>-100</button>
      <button onClick={() => handleSetCount(100)} disabled={!isEven}>+100</button>
      <button onClick={() => handleSetCount(10)} disabled={!isEven}>+10</button>
      <button onClick={() => handleSetCount(1)} disabled={!isEven}>+1</button>
    </div>
  );
};

export default Controller;

---
App.js

import { useState } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";

function App() {
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} count={count} />
      </section>
    </div>
  );
}

export default App;
*/