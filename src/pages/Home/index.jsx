import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../components";

const Home = () => {
    return <Card>
        <Link to="/login">Login</Link>
        <Link>About</Link>
    </Card>
}

const NavLink = styled(Link)`


`

export default Home;