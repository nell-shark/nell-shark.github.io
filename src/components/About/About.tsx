import { Container } from "react-bootstrap";
import { TimelineStep, TimelineStepProps } from "./TimelineStep";

const steps: TimelineStepProps[] = [
  { year: 1998, text: "Birth" },
  { year: 2005, text: "School" },
  { year: 2014, text: "College" },
  { year: 2017, text: "University" },
  { year: 2022, text: "Science" },
];

export function About() {
  return (
    <Container
      id="about"
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="row text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">About Myself</h2>
          <p className="text-muted">My Life History in Timeline</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="d-flex justify-content-center flex-wrap aos-init aos-animate"
            data-aos="fade-up"
          >
            {steps.map((step, index) => (
              <TimelineStep text={step.text} year={step.year} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
