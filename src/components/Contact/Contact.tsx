import { Container } from "react-bootstrap";

export function Contact() {
  return (
    <Container
      id="contact"
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="row text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">Contact</h2>
          <p className="text-muted">Get in Touch</p>
        </div>
      </div>
      
    </Container>
  );
}
