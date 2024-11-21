import {useCallback, useMemo, useState} from "react";

const getAverage = (numbers) => {
    console.log("평균값 계산 중");
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(0);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    },[]); // 마운트될때만 만들고 렌더링 때에는 만들지 않음

    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number)); // 입력받은 값을 정수로 변환하여 concat
        setList(nextList); // 새로 만들어진 배열로 상태 변경
        setNumber(""); // 입력창 비우기
    }, [list, number]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list && list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <p>평균값 : {avg}</p>
        </>
    );
}

export default Average;