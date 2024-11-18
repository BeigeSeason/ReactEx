import styled from "styled-components";

const BoxStyle = styled.div`
    width: 300px;
    background-color: royalblue;
    color: white;
    text-align: center;
    font-size: 1.2em;
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px;
`;

const BoxComponent = ({ children }) => {
    return (
        <BoxStyle>
            {children}
        </BoxStyle>
    );
}

export default BoxComponent;