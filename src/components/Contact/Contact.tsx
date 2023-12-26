import { Container } from "react-bootstrap";
import "./Contact.css";
import { ContactCard, ContactCardProps } from "./ContactCard";

const contactCards: ContactCardProps[] = [
  {
    img: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg",
    title: "Card One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    zIndex: 1,
  },
  {
    img: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg",
    title: "Card Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    zIndex: 2,
  },
  {
    img: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg",
    title: "Card Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    zIndex: 3,
  },
  {
    img: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg",
    title: "Card Four",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    zIndex: 4,
  },
];

export function Contact() {
  return (
    <Container
      id="contact"
    >
      <div className="row text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">Contact</h2>
          <p className="text-muted">Get in Touch</p>
        </div>
      </div>
      <div className="text-center">
        <main>
          <ul id="my-cards">
            {contactCards.map((card, index) => (
              <ContactCard {...card} key={index} />
            ))}
          </ul>
        </main>
      </div>
    </Container>
  );
}
