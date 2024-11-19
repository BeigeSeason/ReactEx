import { useState } from "react"

// select 요소와 option 요소를 사용하여 드롭다운 메뉴 구현
const DropdownComponent = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  }

  const albums = [
    {
      value: "keung",
      text: "킁"
    },
    {
      value: "beige",
      text: "베이지"
    },
    {
      value: "language",
      text: "랭귀지"
    },
    {
      value: "detox",
      text: "디톡스"
    }
  ]

  return (
    <>
      <h1>드롭다운 예제</h1>
      <select value={selectValue} onChange={handleChange}>
        {/* select 안에 value를 지정해주지 않으면 html에서 관리하여 돌아는 가지만 리액트 상태와 UI 동기화를 위해 지정해준다. */}
        <option value="" disabled>앨범을 선택하세요</option>
        <option value={albums[0].value}>{albums[0].text}</option>
        <option value={albums[1].value}>{albums[1].text}</option>
        <option value="language">랭귀지</option>
        <option value="detox">디톡스</option>
      </select>

      <p>선택된 앨범 : {selectValue}</p>
    </>
  );
}

export default DropdownComponent;