import '../Header/Header.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/Home">Work</Nav.Link>
                        <Nav.Link to="/About">About Me</Nav.Link>
                        <Nav.Link to="/Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
