import { Container } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import MyPhoto from "@/assets/svg/me.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { GITHUB_URL, EMAIL_URL, TELEGRAM_URL } from "@/data/constants";
import "./Profile.css";
import { useTranslation } from "react-i18next";

export function Profile() {
  const { t } = useTranslation();
  
  return (
    <Container id="profile" className="d-flex flex-column mb-5">
      <div className="d-flex justify-content-center gap-5 align-items-center flex-grow-1">
        <div className="w-50 text-end">
          <img
            src={MyPhoto}
            className="rounded-circle w-50 rotating-border rotating-border"
          />
        </div>
        <div className="w-50">
          <TypeAnimation
            sequence={[
              t("greeting-1"),
              1000,
              t("greeting-2"),
              1000,
              t("greeting-3"),
              1000,
              t("greeting-4"),
              1000,
            ]}
            preRenderFirstString={true}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "4vw",
              fontWeight: "400",
              display: "inline-block",
              whiteSpace: "pre-line",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="text-center pb-3">
        <a href={GITHUB_URL}>
          <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
        </a>
        <a href={TELEGRAM_URL} className="px-4">
          <FontAwesomeIcon icon={faTelegram} size="2x" color="black" />
        </a>
        <a href={EMAIL_URL}>
          <FontAwesomeIcon icon={faAt} size="2x" color="black" />
        </a>
      </div>
    </Container>
  );
}
