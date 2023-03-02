import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../components";

const Home = () => {
    return <Card>
        <h2 style={{ color: "#ffffff" }}>Home</h2>
        <AccessContainer>
            <span>I want access as a/an</span>
            <div>
                <NavLink to="admin">Admin</NavLink>
                <NavLink to="customer">Customer</NavLink>
                <NavLink to="seller">Seller</NavLink>
                <NavLink to="assistant">Assistant</NavLink>
            </div>
        </AccessContainer>
        <div>
            <NavLink to="/login" style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>login</NavLink>
        </div>
    </Card>
}


const AccessContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:4rem;
    text-align: center;
        span{
            font-size: 1.2rem;
            font-size: 600;
            color: #635985;
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

`
const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffffff;
    :hover{
       color: #635985;
       text-decoration: underline;
    }

`
export default Home;