import { useState, useEffect } from "react";

const InfoEffect = () => {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.")
    console.log({ name, nickName });
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickName = e => {
    setNickname(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={onChangeName} />
      <input value={nickName} onChange={onChangeNickName} />
      <br />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickName}</p>
    </>
  );
}

export default InfoEffect;