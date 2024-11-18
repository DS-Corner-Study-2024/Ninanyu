/*1. 카운트가 짝수일 때 색상 변경하기
카운터 앱에서, 카운트가 짝수일 경우에만 <h1> 요소의 텍스트 색상이 빨간색으로 바뀌도록 하세요. 이때, useEffect를 사용해 count 값의 변화를 감지하고 스타일을 설정하도록 만드세요.
*/

//App.js
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

  useEffect(() => {
    if (count % 2 === 0) {
      setHeaderStyle({ color: 'red' });
    } else {
      setHeaderStyle({ color: 'black' });
    }
  }, [count]);

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
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

/* 정답 코드
mport { useEffect, useState } from "react";

const Viewer = ({ count }) => {
  const [color, setColor] = useState("black"); 

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("red");  // 짝수
    } else {
      setColor("black");  // 홀수
    }
  }, [count]);  // count 값이 변경될 때마다 실행

  return (
    <div>
      <div>현재 카운트 : </div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
};

export default Viewer;
*/