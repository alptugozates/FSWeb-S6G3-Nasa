import { Container, Nav, Navbar } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaHeart, FaInstagram, FaTwitter, IconName } from "react-icons/fa";



export default function Footer () {
 return   (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
        <img className="imgNasa" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/NASA_Wormball_logo.svg" />
        <Nav className="icons">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      <FaEnvelope />
        </Nav>
      <Nav className="footerNav">
        <Nav.Link href="#about">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
 )
}