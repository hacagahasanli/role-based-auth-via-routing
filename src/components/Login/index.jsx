import styled from "styled-components";
import { Card } from "../Card";


export const Login = () => {
    return <Card>
        <h2 style={{ color: "white" }}>Login</h2>
        <InputContainer>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
        </InputContainer>
    </Card>
}

const Input = styled.input`
    width: 80%;
    padding: 0.5rem;
    outline: none;
    border: 1px solid #443C68;
    border-radius: 4px;
    background: 635985;
    background: #443C68;
    color:#ffffff;
    font-weight:600;
    ::placeholder{
        color: white;
    }

`

const Button = styled.button`
    min-width: 7rem;
    min-height:2rem;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
    border: 1px solid #635985;
    border-radius: 3px;
    background: #443C68;

    :hover{
        background:#635985
    }
`

const InputContainer = styled.form`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
`