import "./App.css";

const member = {
    name: "김심야",
    job: "Rapper",
    addr: "서울시 송파구",
    gender: "남"
}

const getGreeting = (user) => {
    return (user) ? (
        <h1>환영합니다. {user}님</h1>
    ) : (
        <h1>환영합니다. 방문자님</h1>
    );
}

// class 선택자는 class 대신 className으로 변경 : JavaScript의 예약어와 겹치기 때문에.
// 태그는 항상 닫힘 태그로 끝나야 한다.
const GreetingComponent = () => {
    return (
        <div className="App">
            <p>{getGreeting(member.name)}</p>
            <hr />
            <p className="title-name">이름은 {member.name}</p>
            <p className="title-name">직업은 {member.job}</p>
            <p className="title-name">주소지는 {member.addr}</p>
            <p className="title-name">성별은 {member.gender}자</p>
        </div>
    )
};

export default GreetingComponent;