import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MotorSport HOUSE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Indumentaria</Nav.Link>
            <Nav.Link href="#features">Vehiculos</Nav.Link>
            <Nav.Link className='carrito' href="#pricing"><CarWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )}



export default NavBar;
