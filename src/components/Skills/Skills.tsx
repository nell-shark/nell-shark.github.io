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

export function Skills() {
  return (
    <Container
      id="skills"
      className="vh-100 d-flex flex-column justify-content-center"
    >
      <div className="text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">Skills</h2>
          <p className="text-muted">A set of technologies that I use</p>
        </div>
      </div>
      <div className="cards-grid overflow-hidden">
        <div className="card-skill sale-1">
          <img src={Gradle} />
        </div>
        <div className="card-skill sale-2">
          <img src={Spring} className="spring" />
        </div>
        <div className="card-skill sale-3">
          <img src={Maven} />
        </div>
        <div className="card-skill product-1">
          <img src={Docker} className="docker" />
        </div>
        <div className="card-skill product-2">
          <img src={MySQL} />
        </div>
        <div className="card-skill product-3">
          <img src={JUnit} />
        </div>
        <div className="card-skill product-4">
          <img src={Git}/>
        </div>
        <div className="card-skill product-5">
          <img src={Nginx} className="nginx"/>
        </div>
        <div className="card-skill product-6">
          <img src={React} className="typescript" />
        </div>
        <div className="blob" />
      </div>
    </Container>
  );
}
