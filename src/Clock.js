import { useState, useEffect } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    // setInterval(() => setDate(new Date()), 1000);
    // 계속 새로운 함수를 호출하는데 함수에 대한 참조를 계속 유지한다.(이전에 호출한 함수도)
    // 따라서 아래처럼 참조를 클리어해주어 메모리 누수를 막는다.

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []); // [] 의존성 배열이라고 하며, 빈 배열이면 마운트 시점을 의미한다.

    return (
        <>
            <h1>현재 시간 표시</h1>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
        </>

    );
}

export default Clock;