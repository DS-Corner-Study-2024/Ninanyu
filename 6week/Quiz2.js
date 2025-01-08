/* 2. 사용자에게 텍스트를 입력받고, '확인' 버튼을 누르면 메시지 대화상자에 사용자가 작성한 텍스트가 그대로 뜨는 코드를 작성하시오. 
단, 텍스트의 길이가 10보다 작으면 해당 폼을 포커스하여 사용자의 추가 입력을 유도하시오. */

import { useRef, useState } from "react";
function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        if (text.length < 10) {
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        }
    };
    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}
export default Body;
