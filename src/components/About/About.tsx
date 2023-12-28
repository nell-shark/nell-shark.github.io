import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./About.css";
import { TimelineStep, TimelineStepProps } from "./TimelineStep";

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
      <div className="text-center justify-content-center mb-5">
        <h2 className="font-weight-bold">{t("about")}</h2>
        <p className="text-muted">{t("about-text")}</p>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {steps.map((step, index) => (
          <TimelineStep {...step} key={index} />
        ))}
      </div>
    </Container>
  );
}
