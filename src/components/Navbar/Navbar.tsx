import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";

export function Navbar() {
  return (
    <NavbarBS collapseOnSelect expand="lg" >
      <Container>
        <NavbarBS.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBS.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto pt-4">
            <Nav.Link href="#about" className="navbar-brand px-3 fs-3">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-brand px-3 fs-3">
              Skills
            </Nav.Link>
            <Nav.Link href="#works" className="navbar-brand px-3 fs-3">
              Works
            </Nav.Link>
            <Nav.Link href="#contact" className="navbar-brand px-3 fs-3">
              Contact
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
