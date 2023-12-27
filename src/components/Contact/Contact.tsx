import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { ContactCard, ContactCardProps } from "./ContactCard";
import { GITHUB_URL, EMAIL_URL, TELEGRAM_URL } from "@/data/constants";
import { Container } from "react-bootstrap";

const contactCards: ContactCardProps[] = [
  { tag: "github", href: GITHUB_URL, icon: faGithub },
  { tag: "telegram", href: TELEGRAM_URL, icon: faTelegram },
  { tag: "email", href: EMAIL_URL, icon: faAt },
];

export function Contact() {
  return (
    <Container
      id="contact"
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="row text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">Contact</h2>
          <p className="text-muted">Get in touch</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="d-flex list-inline">
            {contactCards.map((card, index) => (
              <ContactCard {...card} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
