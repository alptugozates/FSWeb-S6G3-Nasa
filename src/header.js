import { Container, Nav, Navbar } from "react-bootstrap";


export default function Header () {
 return   (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
        <img className="imgNasa" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/NASA_Wormball_logo.svg" />
      <Nav className="navlar">
      <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#apod">APOD</Nav.Link>
        <Nav.Link href="#photos">Photos</Nav.Link>
        <Nav.Link href="#calendar">Calendar</Nav.Link>
        <Nav.Link href="#discuss">Discuss</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
 )
}