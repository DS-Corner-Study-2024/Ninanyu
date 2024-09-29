/*구조 분해 할당은 구조를 분해해 할당하는 문법이다. 배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담을 때 사용한다.*/

let arr = [1,2,3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one,two,three);

/*배열을 구조 분해 할당하면, 저장된 요솟값을 변수 선언과 동시에 순서대로 할당한다. 할당할 변수의 길이가
배열의 길이보다 많아도 오류가 발생하지 않는다. 다만 배열의 길이를 넘는 변수에는 undefined가 할당된다.*/

//객체의 구조 분해 할당
/*객체도 구조 분해 할당이 가능하다. 객체를 구조 분해 할당할 때는 key를 기준으로 한다.
변수 name,age,location에는 person 객체 프로퍼티의 value가 key를 기준으롤 각각 할당된다.*/

let person = {
    name: "김덕성",
    age: 25,
    location: "경기도"
};

let {name, age, location} = person;

console.log(name,age,location);

//함수와 매개변수가 객체일 때 구조 분해 할당하기
