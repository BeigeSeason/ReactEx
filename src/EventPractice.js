import { useState } from "react";

const EventPractice = () => {
    const [message, setMessage] = useState("");
    const [userName, setUserName] = useState("");


    const changeMsg = (event) => {
        setMessage(event.target.value);
    }

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onClick = () => {
        alert(`${userName} : ${message}`);
        setUserName(""); // 입력 창 비우기
        setMessage(""); // 입력 창 비우기
    }

    // Enter 입력 시 onClick() 호출
    const onKeyPress = (e) => {
        if (e.key === "Enter") onClick();
    }

    return (
        <>
            <h1>이벤트 연습</h1>
            <h4> 문자열의 길이 : {message.length}</h4>

            <input type="text" placeholder="사용자명" onChange={onChangeUserName} value={userName} />

            <input
                type="text"
                placeholder="아무거나 입력"
                onChange={changeMsg}
                // onChange={(e) => changeMsg(e)} 내부 이벤트는 매개변수로 전달하지 않아도 전달된다.
                value={message}
                onKeyDown={onKeyPress} />

            <button onClick={onClick}>확인</button>

            <h2>입력받은 메세지 : {message}</h2>
        </>
    );
}

export default EventPractice;