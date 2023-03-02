import { Link } from "react-router-dom";
import { Card } from "../../components";

const Home = () => {
    return <Card>
        <Link to="/login">Login</Link>
        <Link>About</Link>
    </Card>
}

export default Home;