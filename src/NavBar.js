import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BoneHead Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Más vendidos</Nav.Link>
                        <Nav.Link href="#pricing">Tiendas</Nav.Link>
                        <NavDropdown title="Instrumentos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Baterías
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bajos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Crear Cuenta
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><img src=''></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;