import {useRef, useEffect, useState} from "react";

const InnerValueKeep = () => {

    const myBtnRef = useRef(null);

    useEffect(() => {
        if (myBtnRef.current) {
            myBtnRef.current.innerText = "클릭하세요";
        }
    }, []);


    // 컴포넌트 내부 변수값 유지하기
    const count = useRef(0);

    // let사용시 렌더링이 다시 일어나면 값이 유지되지 않는다.
    // let count = 0;

    const [state, setState] = useState(false);

    const handleClick = () => {
        count.current += 1;
        alert(`클릭 횟수 : ${count.current}`);
        // count += 1
        // alert(`클릭 횟수 : ${count}`);
        setState(!state);
    }

    return (
        <>
            <button ref={myBtnRef} onClick={handleClick}>초기상태</button>
        </>
    )

}

export default InnerValueKeep;