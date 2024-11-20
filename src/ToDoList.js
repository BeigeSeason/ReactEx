import { useEffect, useState } from "react";

const ToDoList = () => {
  const [names, setNames] = useState(() => {
    const storedNames = localStorage.getItem("names");
    return storedNames ? JSON.parse(storedNames) :
      [
        { id: 1, text: "html 연습" },
        { id: 2, text: "css 복습" },
        { id: 3, text: "자바스크립트 이해" },
        { id: 4, text: "리액트 프로젝트" },
      ]
  });
  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const [inputText, setInputText] = useState("");

  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    // const nextNames = names.concat({id: nextId, text: inputText})
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // id 증가
    setNames(nextNames); // TodoList 갱신
    setInputText(""); // 입력창 초기화
    console.log(nextId);
  }

  const onRemove = id => {
    // 조건에 맞는 요소만 반환받아 새로운 배열 생성
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names && names.map(name => (
          <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
        ))}
      </ul>
    </>
  )


}

export default ToDoList;