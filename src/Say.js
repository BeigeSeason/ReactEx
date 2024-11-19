import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 960px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`;

const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    .enterClick{
        background-color: aliceblue;
        color: black
    }

    .leaveClick{
        background-color: silver;
        color: black;
    }
`;

const Button = styled.button`
box-sizing: border-box;
width: 150px;
padding: 10px 20px;
border-radius: 8px;
background-color:${props => props.color || "black"};;
color: white;
font-size: 1.4em;
font-weight: bold;
transition: all 0.1s ease;
&:hover{ // & : 자기자신
    color: #aaa;
    cursor: pointer;
}

&:active{
    transform: translateY(2px);
}
`;

const Say = () => {
    const [msg, setMsg] = useState(" ");
    const [value, setValue] = useState("black");

    const onClickEnter = () => setMsg("안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요");
    const onClickLeave = () => setMsg("안녕히가세요안녕히가세요안녕히가세요안녕히가세요안녕히가세요");


    return (
        <Container>
            <BtnContainer>
                <Button className="enterClick" onClick={onClickEnter}>입장</Button>
                <Button className="leaveClick" onClick={onClickLeave}>퇴장</Button>
            </BtnContainer>

            <h1 style={{ color: value }}>{msg}</h1>

            <BtnContainer>
                <Button color="orangered" onClick={() => setValue("orangered")}>RED</Button>
                <Button color="seagreen" onClick={() => setValue("seagreen")}>GREEN</Button>
                <Button color="royalblue" onClick={() => setValue("royalblue")}>BLUE</Button>
                <Button onClick={() => setValue()}>NONE</Button>
            </BtnContainer>
        </Container>
    )

}

export default Say;