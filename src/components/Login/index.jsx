import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context";
import { Card } from "../../shared/Card";
import { randomQuote } from "../../utils";

export const Login = () => {
    const navigate = useNavigate()
    const [value, seValue] = useState({ username: "", password: "" })
    // let { count, countInc } = useContext(AuthContext)
    const { quote, writer } = randomQuote()

    const navigateHandler = () => navigate("/", { replace: true })

    const loginHandler = (e) => {
        e.preventDefault();
    }

    return <Card>
        <h2 style={{ color: "white", marginTop: "2.3rem" }}>Login</h2>
        <InputContainer onSubmit={(e) => loginHandler(e)}>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
        </InputContainer>
        <Quote>
            <span>{quote}</span>
            <span>{writer}</span>
        </Quote>
        <Back onClick={navigateHandler}>Back</Back>
    </Card>
}

const Back = styled.span`
    cursor: pointer;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    border: 1px solid #635985;
    background: #443C68;
    border-radius: 4px;
    color: #ffffff;
    padding: 0.5rem;
    letter-spacing: 0.05rem;
    font-weight: 600;

    :hover{
        background:#635985
    }

`
const Quote = styled.span`
    margin-top: 2.2rem;
    padding: 0 1.3rem;
    font-size: 1.2rem;
    color: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`
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
    cursor: pointer;

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