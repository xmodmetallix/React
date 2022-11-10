import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src='https://boneheadstore.000webhostapp.com/Multimedia/imagenes/logo6.png' width={150}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#MasVendidos">Más vendidos</Nav.Link>
                        <Nav.Link href="#Tiendas">Tiendas</Nav.Link>
                        <NavDropdown title="Instrumentos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Guitarras">Guitarras</NavDropdown.Item>
                            <NavDropdown.Item href="#Baterias">Baterías</NavDropdown.Item>
                            <NavDropdown.Item href="#Bajos">Bajos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#IniciarSesion">Iniciar sesión</Nav.Link>
                        <Nav.Link eventKey={2} href="#CrearCuenta">Crear Cuenta</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#Cart' ><img src='https://icons.veryicon.com/png/o/miscellaneous/template-3/shopping-cart-94.png' width={45} ></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;