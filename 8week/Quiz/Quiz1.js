/*문제1 : 숫자 카운터를 구현하기, useState코드를 참고해서 ,+1, +10, +100, -1, -10, -100의 버튼을 만들고 숫자를 카운터 하는 코드는 구현하시오.*/

// Counter.js

import React, { useState } from 'react';
 
const Counter = () => {
  const [value, setValue] = useState(0);
 
  const handleChange = (num) => {
    setValue(value + num);
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => handleChange(value + 1)}>+1</button>
      <button onClick={() => handleChange(value + 10)}>+10</button>
      <button onClick={() => handleChange(value + 100)}>+100</button>
      <button onClick={() => handleChange(value - 1)}>-1</button>
      <button onClick={() => handleChange(value - 10)}>-10</button>
      <button onClick={() => handleChange(value - 100)}>-100</button>
    </div>
  );
};
 
export default Counter;


//app.js

import React from 'react';
import Counter from './Counter';

const App = () => {
    return <Counter />;
};
export default App;