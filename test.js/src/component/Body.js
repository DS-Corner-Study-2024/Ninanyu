function Body({ name, studentnumber }) {
    console.log(name, studentnumber);
    return (
      <div className="body">
        {name}은 {studentnumber}입니다.
      </div>
    );
  }
  export default Body;