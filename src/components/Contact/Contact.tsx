import { CONTACT_INFO_LIST } from "@/data/constants";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import { ContactCard } from "./ContactCard";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Container
      id="contact"
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="text-center justify-content-center mb-5">
        <h2 className="font-weight-bold">{t("contact")}</h2>
        <p className="text-muted">{t("contact-text")}</p>
      </div>
      <ul className="d-flex list-inline">
        {CONTACT_INFO_LIST.map((card, index) => (
          <ContactCard {...card} key={index} />
        ))}
      </ul>
    </Container>
  );
}
