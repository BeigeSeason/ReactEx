import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;

  th, td{
    border: 1px solid #ccc;
    padding: 4px 8px;
  }

  th{
    background-color: skyblue;
  }
`;

const responseData = [
  {
    id: 1,
    name: "김심야",
    age: 29,
    addr: "서울시 강남구"
  },
  {
    id: 2,
    name: "최원재",
    age: 31,
    addr: "서울시 송파구"
  },
  {
    id: 3,
    name: "류성민",
    age: 31,
    addr: "제주시"
  },
  {
    id: 4,
    name: "신동갑",
    age: 38,
    addr: "경기도 광명시"
  },
  {
    id: 5,
    name: "최성호",
    age: 38,
    addr: "서울시 마포구"
  }
]

const TableMap = () => {
  const [memberData, setMemberData] = useState(""); // 들어오는 값이 배열이기 때문에 기본값이 []이 정석이다.

  useEffect(() => {
    // 이때 서버와 비동기통신이 일어난다.
    setMemberData(responseData);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  }

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData
        && memberData.map((member, idx) => (
          <tr key={idx} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
}

export default TableMap;