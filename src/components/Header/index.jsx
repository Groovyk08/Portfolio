import '../Header/Header.css';
import 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import navPic from '../../assets/navPic.jpeg';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        {/* <img src={navPic} alt="navPic" /> */}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Home">Work</Nav.Link>
                        <Nav.Link href="/About">About Me</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
