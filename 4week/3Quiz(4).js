/*2. 위에서 작성한 모듈 값을 불러오는 코드를 작성하시오.
(파일 위치는 같은 폴더 안, 파일명 example.js)*/

const conEX = "상수 예시";

function funcEX1() {
    console.log("함수 예시1")
  }
  
  function funcEX2() {
    console.log("함수 예시2")
  }

  export { conEX, funcEX1, funcEX2};

import { conEX, funcEX1, funcEX2 } from "./example.js"
import * from "./example.js" 