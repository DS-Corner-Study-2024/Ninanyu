/* 문제2 useState와 useEffect를 이용하여 학번과 학과를 입력받는 코드를 작성하시오. 
(힌트: (studentId, setStudentId), (department, setDepartment)) */

//Info.js
import React, {useState, useEffect} from 'react';

const Info = () => {
    const [studentId, setStudentId] = useState ('');
    const [department, setDepartment] = useState('');
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
          name,
          nickname
        });
      });

    const onChangestudentId = e => {
        setStudentId(e.target.value);
    };
    
    const onChangeDepartment = e => {
        setDepartment(e.target.value);
    };
    
    return(
        <div>
            <div>
                <input value={studentId} onChange={onChangestudentId} />
                <input value={department} onChange={onChangeDepartment} />
            </div>
            <div>
                <div>
                    <b>학번: </b> {studentId}
                </div>
                <div>
                    <b>학과: </b> {department}
                </div>
            </div>
        </div>
    );
};

export default Info;

// App.js
import React from 'react';
import Info from './Info';
 
const App = () => {
  return <Info />;
};
 
export default App;