import MyPhoto from "@/assets/svg/me.svg";
import { CONTACT_INFO_LIST } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";

export function Profile() {
  const { t } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setForceUpdate(prev => prev + 1);
  }, [localStorage.getItem("language")]);

  return (
    <Container id="profile" className="d-flex flex-column mb-5">
      <div className="d-flex justify-content-center gap-5 align-items-center flex-grow-1">
        <div className="w-50">
          <img
            src={MyPhoto}
            className="rounded-circle w-50 rotating-border rotating-border"
            alt="My Photo"
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
              1000
            ]}
            preRenderFirstString={true}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            key={forceUpdate}
            className="type-animation"
          />
        </div>
      </div>
      <div className="text-center pb-5">
        {CONTACT_INFO_LIST.map((contact, index) => (
          <a href={contact.href} className="px-4" key={index}>
            <FontAwesomeIcon icon={contact.icon} size="2x" color="black" />
          </a>
        ))}
      </div>
    </Container>
  );
}
