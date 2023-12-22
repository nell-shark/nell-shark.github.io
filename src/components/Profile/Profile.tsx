import { Container } from "react-bootstrap";
import MyPhoto from "../../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { GITHUB_REPO_URL, MAIL_URL, TELEGRAM_URL } from "../../data/constants";

export function Profile() {
  return (
    <Container id="about" className="d-flex flex-column">
      <div className="d-flex justify-content-center gap-5 align-items-center flex-grow-1">
        <div className="w-50 text-end">
          <img
            src={MyPhoto}
            className="rounded-circle w-50 rotating-border rotating-border"
          />
        </div>
        <div className="w-50">
          <h1
            style={{
              fontSize: "4em",
              fontWeight: "400",
              display: "inline-block",
            }}
          >
            Hi
            <br />
            I'm Vlad
          </h1>
          <br />
          <TypeAnimation
            sequence={[
              "A Developer",
              1000,
              "A Software Engineer",
              1000,
              "A Coder",
              1000,
              "A Dreamer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "4em",
              fontWeight: "400",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="text-center pb-3">
        <a href={GITHUB_REPO_URL}>
          <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
        </a>
        <a href={TELEGRAM_URL} className="px-4">
          <FontAwesomeIcon icon={faTelegram} size="2x" color="black" />
        </a>
        <a href={MAIL_URL}>
          <FontAwesomeIcon icon={faAt} size="2x" color="black" />
        </a>
      </div>
    </Container>
  );
}
