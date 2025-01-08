/*1. AList는 함수형 컴포넌트이다. 매개변수로 객체 구조 분해 할당을 사용하여 props를 받고 있다. onCheck 함수를 호출 후 id를 인자로 전달하는 코드를 추가하라. 이때, 추가할 함수의 이름은 onClickCheck이며 컴포넌트를 완성할 필요는 없다.
const AList = ({ id, list, fin, onCheck}) => {

} */

    const AList = ({ id, list, fin, onCheck}) => {
        const onClickCheck = () => { 
               Check(id);
        };
     }
     
