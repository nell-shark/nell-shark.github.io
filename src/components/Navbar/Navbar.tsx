import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import "./Navbar.css";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <NavbarBS collapseOnSelect expand="lg">
      <Container>
        <NavbarBS.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBS.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto pt-4">
            {["about", "skills", "works", "contact"].map(section => (
              <Nav.Link href={`#${section}`} className="navbar-brand px-3 fs-3" key={section}>
                {t(section)}
              </Nav.Link>
            ))}
            <LanguageToggle />
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}
