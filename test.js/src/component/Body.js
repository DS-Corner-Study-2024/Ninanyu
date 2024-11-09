function Body(){
  function handleOnClick(){
    alert("버튼을 클릭하셨군요!");
  }
  return (
    <div className="body">
      <buttion onClick={handleOnClick}>클릭하세요</buttion>
    </div>
  );
}
  export default Body;