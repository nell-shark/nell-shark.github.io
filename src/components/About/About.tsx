import { Container } from "react-bootstrap";
import { TimelineStep, TimelineStepProps } from "./TimelineStep";
import "./About.css";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const steps: TimelineStepProps[] = [
    { year: 1998, text: t("birth") },
    { year: 2005, text: t("school") },
    { year: 2014, text: t("college") },
    { year: 2017, text: t("university") },
    { year: 2022, text: t("science") },
  ];

  return (
    <Container
      id="about"
      className="vh-100 d-flex flex-column justify-content-center align-items-center mb-5"
    >
      <div className="row text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">{t("about")}</h2>
          <p className="text-muted">{t("about-text")}</p>
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
