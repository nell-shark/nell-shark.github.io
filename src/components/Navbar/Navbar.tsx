import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBs from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import "./Navbar.css";

const SECTIONS = ["about", "skills", "works", "contact"];

export function Navbar() {
  const { t } = useTranslation();

  return (
    <NavbarBs collapseOnSelect expand="lg">
      <Container>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBs.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto pt-4">
            {SECTIONS.map(section => (
              <Nav.Link href={`#${section}`} className="navbar-brand px-3 fs-3" key={section}>
                {t(section)}
              </Nav.Link>
            ))}
            <LanguageToggle />
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
