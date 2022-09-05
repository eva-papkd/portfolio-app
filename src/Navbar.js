import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavbarPortfolio() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Informal Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/Catfacts">CAT FACTS </Nav.Link>
                        <Nav.Link as={Link} to="/Counter">COUNTER</Nav.Link>
                        <Nav.Link as={Link} to="/Capitalizingapp">CAPITALIZING</Nav.Link>
                        <Nav.Link as={Link} to="/Zodiacsign">ZODIAC SIGNS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </>
    );
}

export default NavbarPortfolio;