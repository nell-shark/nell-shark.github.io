import { Container } from "react-bootstrap";
import Docker from "@/assets/docker.svg";
import Gradle from "@/assets/gradle.svg";
import JUnit from "@/assets/junit.svg";
import Spring from "@/assets/spring.svg";
import MySQL from "@/assets/mysql.svg";
import Nginx from "@/assets/nginx.svg";
import Git from "@/assets/git.svg";
import Maven from "@/assets/maven.svg";
import React from "@/assets/typescript.svg";
import "./SkillList.css";

export function SkillList() {
  return (
    <Container
      id="skills"
      className="d-flex flex-column justify-content-center mb-5"
    >
      <div className="text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">Skills</h2>
          <p className="text-muted">A set of technologies that I use</p>
        </div>
      </div>
      <div className="skill-cards-grid overflow-hidden">
        <div className="skill-card block-1">
          <img src={Gradle} />
        </div>
        <div className="skill-card block-2">
          <img src={Spring} className="spring" />
        </div>
        <div className="skill-card block-3">
          <img src={Maven} />
        </div>
        <div className="skill-card cube-1">
          <img src={Docker} className="docker" />
        </div>
        <div className="skill-card cube-2">
          <img src={MySQL} />
        </div>
        <div className="skill-card cube-3">
          <img src={JUnit} />
        </div>
        <div className="skill-card cube-4">
          <img src={Git} />
        </div>
        <div className="skill-card cube-5">
          <img src={Nginx} className="nginx" />
        </div>
        <div className="skill-card cube-6">
          <img src={React} className="typescript" />
        </div>
        <div className="blob" />
      </div>
    </Container>
  );
}
