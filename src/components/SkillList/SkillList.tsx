import Docker from "@/assets/svg/docker.svg";
import Git from "@/assets/svg/git.svg";
import Gradle from "@/assets/svg/gradle.svg";
import JUnit from "@/assets/svg/junit.svg";
import Maven from "@/assets/svg/maven.svg";
import MySQL from "@/assets/svg/mysql.svg";
import Nginx from "@/assets/svg/nginx.svg";
import Spring from "@/assets/svg/spring.svg";
import React from "@/assets/svg/typescript.svg";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./SkillList.css";

const skills = [
  { name: "gradle", svg: Gradle, gridArea: "block-1" },
  { name: "spring", svg: Spring, gridArea: "block-2" },
  { name: "maven", svg: Maven, gridArea: "block-3" },
  { name: "docker", svg: Docker, gridArea: "cube-1" },
  { name: "mysql", svg: MySQL, gridArea: "cube-2" },
  { name: "junit", svg: JUnit, gridArea: "cube-3" },
  { name: "git", svg: Git, gridArea: "cube-4" },
  { name: "nginx", svg: Nginx, gridArea: "cube-5" },
  { name: "react", svg: React, gridArea: "cube-6" },
];

export function SkillList() {
  const { t } = useTranslation();

  return (
    <Container
      id="skills"
      className="d-flex flex-column justify-content-center mb-5"
    >
      <div className="text-center justify-content-center mb-5">
        <h2 className="font-weight-bold">{t("skills")}</h2>
        <p className="text-muted">{t("skills-text")}</p>
      </div>
      <div className="skill-cards-grid overflow-hidden">
        {skills.map((skill, index) => (
          <div className={`skill-card ${skill.gridArea}`} key={index}>
            <img src={skill.svg} alt={skill.name} className={skill.name} />
          </div>
        ))}
        <div className="blob" />
      </div>
    </Container>
  );
}
