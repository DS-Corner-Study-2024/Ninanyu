/* BookList 컴포넌트에서 책 제목으로 검색하는 기능을 구현하려고 한다. 대소문자를 구분하지 않고 검색할 수 있도록 fBooks 함수를 완성하여라. books 배열에는 각 책의 정보가 객체로 저장되어 있으며 각 객체는 title 속성을 가지고 있다. 이때 searchTerm은 사용자가 입력한 검색어로, 책 제목을 필터링하는 데 사용된다. 예시 매개변수는 book이지만 다른 이름이어도 상관없다. 
const BookList = ({ books, searchTerm }) => {
  const fBooks = () => {
   
  };
(이 아래는 구현하지 않아도 됩니다.)}; */

const BookList = ({ books, searchTerm }) => {
    const fBooks = () => {
     return searchTerm === ""
     ? books
     : books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };
  (생략)};