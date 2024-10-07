//배열과 메서드
/*자바스크립트는 배열을 쉽게 다룰 수 있또록 여러 메서드를 제공한다. 이런 메서드를 '배열 메서드'라고 한다.*/

//요소의 추가 및 삭재 메서드
//push 
/*push는 배열 맨 끝에 요소를 추가하고 새로운 길이를 반환하는 메서드다. push 메서드로 여러 요소를 추가하려면 콤마
로 구분해 전달하면 된다. push 메서드는 무조건 배열 맨 끝에 요소를 추가하기 때문에 배열 중간이나 맨 앞에 요소를
추가하려면 다른 메서드를 사용해야 한다.*/

let food = ["짜장면","짬뽕","탕수육"];
const newLength = food.push("볶음밥");

console.log(food);
console.log(newLength.length);