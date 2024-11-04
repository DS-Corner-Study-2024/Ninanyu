function Body (props) {
    console.log(name,location);
    return <div className="body">
        {props.name}은 {props.location}에 거주합니다
        </div>;
}
export default Body;