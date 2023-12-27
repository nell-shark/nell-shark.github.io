import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <NavbarBS collapseOnSelect expand="lg">
      <Container>
        <NavbarBS.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBS.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto pt-4">
            <Nav.Link href="#about" className="navbar-brand px-3 fs-3">
              {t("about")}
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-brand px-3 fs-3">
              {t("skills")}
            </Nav.Link>
            <Nav.Link href="#works" className="navbar-brand px-3 fs-3">
              {t("works")}
            </Nav.Link>
            <Nav.Link href="#contact" className="navbar-brand px-3 fs-3">
              {t("contact")}
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
