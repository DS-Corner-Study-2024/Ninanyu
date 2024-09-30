/*문제 2.
const products = [
    { name: "연습장", price: 1000 },
    { name: "껌", price: 500 },
    { name: "샤프", price: 1500 },
    { name: "사탕", price: 800 },
    { name: "주사위", price: 1200 }
];
다음과 같이 상품의 이름과 가격이 주어졌다. 가격을 기준으로 오름차순으로 정렬하고, 정렬된 상품 이름과 가격을 출력하시오. 

ex) 
껌: 500
사탕: 800
연습장: 1000
주사위: 1200
샤프: 1500*/

const products = [
    { name: "연습장", price: 1000 },
    { name: "껌", price: 500 },
    { name: "샤프", price: 1500 },
    { name: "사탕", price: 800 },
    { name: "주사위", price: 1200 }
];

products.sort((a, b) => a.price - b.price); 
products.forEach((product) => {
    console.log(`${ product.name }: ${product.price}`);
});

//sort활용O, forEach 사용X로 반쯤 코딩 하였음.