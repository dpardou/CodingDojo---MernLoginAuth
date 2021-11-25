import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

const Home = (props) => {

    return <Container>
            <Row>
                <Link to={"/register"}> Registrarse </Link>
            </Row>
            <Row>
                <Link to={"/login"}> Login </Link>
            </Row>
            <Row>
                <Link to={"/contacts"}> Contactos </Link>
            </Row>
    </Container>;
}

export default Home;