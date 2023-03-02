import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context";
import { Card } from "../../shared/Card";
import { randomQuote } from "../../utils";

export const Login = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = useState([])
    const [value, setValue] = useState({ username: "", password: "" })
    let { setUserValues } = useContext(AuthContext)
    const navigateHandler = () => navigate("/", { replace: true })

    const setFieldValue = (e) => {
        const { value, name } = e.target
        setValue((prevValue) => ({ ...prevValue, [name]: value }))
    }

    useEffect(() => {
        const quoteText = randomQuote()
        setQuote(quoteText)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        setUserValues(value)
    }

    const inputs = [
        {
            id: "i1",
            type: "text",
            placeholder: "Username",
            name: "username",
        },
        {
            id: "i2",
            type: "password",
            placeholder: "Password",
            name: "password",
        }
    ]

    return <Card>
        <LoginHeader>Login</LoginHeader>
        <InputContainer onSubmit={(e) => submitHandler(e)}>
            {
                inputs?.map(({ id, ...rest }) => <Input key={id} {...{ ...rest }} onChange={e => setFieldValue(e)} />)
            }
            <Button type="submit">Login</Button>
        </InputContainer>
        <Quote>
            {
                Object.entries(quote).map(([key, value]) => <span key={key}>{value}</span>)
            }
        </Quote>
        <Back onClick={navigateHandler}>Back</Back>
    </Card>
}

const LoginHeader = styled.h2`
   color: white;
   margin-top: 2.3rem;
`

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