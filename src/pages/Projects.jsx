import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import QuizApp from "../assets/projects/QuizApp.png";
import JopPortal from "../assets/projects/JopPortal.png";
import DigitalClock from "../assets/projects/DigitalClock.png";
import WeatherApp from "../assets/projects/WeatherApp.png";
import Elearning from "../assets/projects/E-learning.png";
import TicToy from "../assets/projects/TicToy.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalClock}
              isBlog={false}
              title="DigitalClock Show Time "
              description="A digital clock is an alternative to a traditional analogue clock. This type of clock shows numbers to display the time in a digital format, By using the html ,Css ,JavaScripts"
              ghLink="https://github.com/Anil9651080"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JopPortal}
              isBlog={false}
              title="Jop Portal Project"
              description="Online Job portal is an application that connects employer and job seekers
where employers are the source of resources and job seekers can find and apply
for their target job."
              ghLink="https://github.com/Anil9651080/Job-Portal-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Elearning}
              isBlog={false}
              title="Online E-learning Website"
              description="This is a simple static website using HTML CSS Bootstrap and JavaScript.Here Users can easy to read and download books and materials etc."
              ghLink="https://github.com/Anil9651080/Online-E---learing-WebApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="QuizApp Project"
              description=" Welcome to the  blog. In this article, We create a Quiz Website using HTML, CSS, And JavaScript. We give you the Complete source code of the Quiz Website."
              ghLink="https://github.com/Anil9651080"
              demoLink="https://github.com/Anil9651080"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App Project "
              description="In the video, you have seen a demo of this weather app and how I built this project using HTML CSS & JavaScript. I’ve used OpenWeatherMap API to get the weather details of the user entered city or user's current location."
              ghLink="https://github.com/Anil9651080"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicToy}
              isBlog={false}
              title="TicToy Game"
              description="we made a tic tac toe game using HTML, CSS, and JavaScript. We discussed the process of creating or building the game. Also, we discussed the process of playing the game as well."
              ghLink="https://github.com/Anil9651080/Project_1-Tic_Tak-"
              demoLink="https://github.com/Anil9651080/Project_1-Tic_Tak-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects