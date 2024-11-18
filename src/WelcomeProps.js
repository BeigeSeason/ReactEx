
// 컴포넌트 : 리액트에서 UI를 구성하는 독립적인 모듈 함수와 비슷하지만 UI 구성과 관리에 특화
// UI와 상태(State)로 구성
// 반드시 대문자로 시작, 소문자로 시작할 시 HTML 태그로 판단
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때에는 props로 전달
// props는 키워드가 아니다.


// 구조분해(비구조화 할당) : {}
const WelcomeProps = (props) => {
    const { name, job, addr, isAdult, info } = props;

    return (
        <>
            <h1>안녕하세요 {name}님</h1>
            <p>직업 : {job}</p>
            <p>주소 : {addr}</p>
            <p>성인여부 : {isAdult ? "성인입니다." : "미성년자입니다."}</p>
            <p>정보 : {info}</p>
        </>
    );


}

export default WelcomeProps;