import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Wrapper = styled.div`
  .carousel {
    width: 80%;
    margin: 0 auto;
  }
  .projects {
    font-size: 28px;
    width: 80%;
    margin: 1em auto;
  }
`;

class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <h1 className="projects">My Work</h1>
        <Carousel>
          <div className="carousel">
            <div>
              <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?fit=1500%2C908&ssl=1" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=636&h=477" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://capturelandscapes.com/wp-content/uploads/2018/05/Geroldsee-960.jpg" />
              <p className="legend">Legend 3</p>
            </div>
          </div>
        </Carousel>
      </Wrapper>
    );
  }
}

export default Projects;
