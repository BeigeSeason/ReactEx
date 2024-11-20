import styled from "styled-components";

const DivBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 20px auto;
  background-color: seagreen;
  color: white;
  text-align: center;
  border-radius: 12px;
  padding-top: 15px;
`;

const data = [
  {
    id: 100,
    userName: "천지훈",
    email: "1000won@gmail.com"
  },
  {
    id: 200,
    userName: "백마리",
    email: "2000won@gmail.com"
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com"
  },
]

// const User = (props) => {
//   return (
//     <div>
//       <p>ID : {props.user.id}</p>
//       <p>이름 : {props.user.userName}</p>
//       <p>이메일 : {props.user.email}</p>
//     </div>
//   );
// }

const User = ({ user }) => {
  return (
    <DivBox>
      <p>ID : {user.id}</p>
      <p>이름 : {user.userName}</p>
      <p>이메일 : {user.email}</p>
    </DivBox>
  );
}


const UserList = () => {
  return (
    <>

      {/* <div>
        <p>ID : {data[0].id}</p>
        <p>이름 : {data[0].userName}</p>
        <p>이메일 : {data[0].email}</p>
      </div>
      <div>
        <p>ID : {data[1].id}</p>
        <p>이름 : {data[1].userName}</p>
        <p>이메일 : {data[1].email}</p>
      </div>
      <div>
        <p>ID : {data[2].id}</p>
        <p>이름 : {data[2].userName}</p>
        <p>이메일 : {data[2].email}</p>
      </div> */}
      {/* <User user={data[0]} />
      <User user={data[1]} />
      <User user={data[2]} /> */}

      {data && data.map(u => (
        <User key={u.id} user={u} />
      ))}
    </>
  );
}

export default UserList;