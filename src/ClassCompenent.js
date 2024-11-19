// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트가 존재
// 현재는 함수형 컴포넌트만 사용
// 이전에는 상태와 생명주기 관리를 위해 클래스형 컴포넌트를 사용했지만
// 16.8 버전 이후부터 함수형 컴포넌트에서도 상태와 생명주기 관리가 가능해짐

import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    // const [게터의 역할, 세터의 역할] = useState(초기값);
    // 값이 변경되면 렌더링 수행

    // let number = 0; // 이렇게 하면 number가 바뀌어도 랜더링이 안되기 때문에 화면은 그대로
    // const setNumber = () => {
    //     number += 1;
    //     console.log(number);
    // }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
        </>
    )
}

export default Counter;