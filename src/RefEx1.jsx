import {useRef} from "react";

const CreateRef = () => {
    // 참조하는 DOM 요소가 없음(초기값)
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    // current 사용하여 ref 객체에서 현재 참조하고 있는 DOM 요소에 접근
    // inputRef는 useRef를 통해 생성된 객체로, 실제 DOM 요소는 current 속성에 저장됩니다.
    // current를 사용하지 않으면 DOM 요소에 접근할 수 없으므로, disabled 속성이나 focus 메소드를 호출할 수 없습니다.

    return (
        <>
            <input disabled type="text" ref={inputRef}/>
            <button onClick={handleFocus}>활성화</button>
        </>
    )
}

export default CreateRef;