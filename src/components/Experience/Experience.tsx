import { Container } from "react-bootstrap";
import Docker from "@/assets/docker.svg";
import Gradle from "@/assets/gradle.svg";
import JUnit from "@/assets/junit.svg";
import Spring from "@/assets/spring.svg";
import MySQL from "@/assets/mysql.svg";
import Kubernetes from "@/assets/kubernetes.svg";
import Git from "@/assets/git.svg";
import Maven from "@/assets/maven.svg";
import React from "@/assets/react.svg";

export function Experience() {
  return (
    <Container
      id="experience"
      className="vh-100 d-flex flex-column justify-content-center"
    >
      <div className="text-center justify-content-center mb-5">
        <div className="w-100">
          <h2 className="font-weight-bold">Experience</h2>
          <p className="text-muted">A set of technologies that I use</p>
        </div>
      </div>
      <div className="cards-grid">
        <div className="card-demo sale-1">
          <img src={Gradle} />
        </div>
        <div className="card-demo sale-2">
          <img src={Spring} />
        </div>
        <div className="card-demo sale-3">
          <img src={Maven} />
        </div>
        <div className="card-demo product-1">
          <img src={Docker} />
        </div>
        <div className="card-demo product-2">
          <img src={MySQL} />
        </div>
        <div className="card-demo product-3">
          <img src={JUnit} />
        </div>
        <div className="card-demo product-4">
          <img src={React} />
        </div>
        <div className="card-demo product-5">
          <img src={Kubernetes} />
        </div>
        <div className="card-demo product-6">
          <img src={Git} />
        </div>
        <div className="blob" />
      </div>
    </Container>
  );
}
