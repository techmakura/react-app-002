import styled from "styled-components";

const Button = () => {
    const ButtonStyle = styled.button`
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
    `;

    const InputStyle = styled.input`
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 50%;
    `;

    const InputWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        `;

    return (
        <InputWrapper>
            <InputStyle type="text" placeholder="Type here..." />
            <ButtonStyle>Submit</ButtonStyle>
        </InputWrapper>
    );
}

export default Button;