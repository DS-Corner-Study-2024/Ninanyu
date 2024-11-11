/*1.  const[state, setState]=useState를 활용하여 다음과 같은 state를 한꺼번에 관리하는 코드를 작성하여라.
- input 태그의 입력 폼에서 이름을 입력받는다.
- date type인 input 태그의 입력 폼에서 오늘 날짜를 입력받는다.
- textarea 태그의 입력 폼에서 이메일을 입력받는다.
*/

import { useState } from "react";

function Body() {
    const [state, setState] = useState({
        name: "",
        date: "",
        email: "",
    });

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeDate = (e) => {
        setDate(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder="이름" />
            </div>
            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
            </div>
            <div>
                <textarea value={email} onChange={onChangeEmail} />
            </div>
        </div>
    );
}
export default Body;


/* 답
import { useState } from "react";
function Body() {
  const [state, setState] = useState({ 
    name: "",
    today: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  return (
    <div>
      <div>
        <input
          name="name" 
          value={state.name} 
     onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="today"
          type="date"
          value={state.today}
     onChange={handleChange}
        />
      </div>
      <div>
        <textarea 
     name="email" 
     value={state.email}
     onChange={handleChange}/>
      </div>
    </div>
  );
}
export default Body;
*/