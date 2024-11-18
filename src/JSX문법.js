// JSX문법 이해하기
// JSX에 표현식 포함하기 : {변수 혹은 연산식}
// 감싸인 요소로 표현하기 : 컴포넌트 반환 시 하나의 태그여야 한다
// 조건부 랜더링 : JSX 구문 내부에선 연산자 사용이 가능하기 때문에 조건부 랜더링 가능.
// 삼항연산자 사용으로 참인경우와 거짓인 경우의 화면을 다르게 구성 가능
// && 연산자를 사용하여 화면을 다르게 구성 가능(&&면 앞의 조건이 참이어야 그 다음 조건도 실행하기 때문)
// 인라인 스타일링 : 리액트에선 스타일 지정 시 문자열의 형태가 아니고 객체 형태로 만들어야 함
// 컴포넌트로 사용하기 위해서는 첫 글자가 대문자일 필요가 있다.

const inlineStyle = {
    backgroundColor: "#222",
    color: "royalblue",
    fontSize: "2em"
};


const JsxSyntax = () => {

    const name = "김심야";
    const name2 = "리액트";
    const member = true;

    return (
        // DOM에 붙이기 위해서 하나의 태그일 필요가 있기 때문에 하나의 태그로 묶어준다.
        <>
            <h1>리액트 공부를 시작하겠습니다.</h1>
            <p>리액트는 JSX 문법을 사용하고 리턴문 내에서 작성합니다.</p>
            <p>중괄호를 사용하여 간단하게 변수 삽입이 가능합니다 : {name}</p>
            {name2 === "리액트" ? (
                <h1 style={inlineStyle}>리액트를 공부하겠습니다.</h1>
            ) : (
                <h1>자바스크립트를 공부하겠습니다.</h1>
            )}

            {member && (
                <>
                    <h1>환영합니다 고객님</h1>
                    <p>해당 메뉴를 자유롭게 사용하실 수 있습니다.</p>
                </>
            )}
        </>
    );
}

export default JsxSyntax;