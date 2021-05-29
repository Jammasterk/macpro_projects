import React from "react";
import styled from "styled-components";
import SplashImg from "../assets/splash__img.jpg";

const Wrapper = styled.div`
 // margin: 1em 0
}
img{
    width: 100%;
    height: 100vh;
    // filter: grayscale(1)
}
.splash__text{
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #efecec;
    margin-left: 1em

}
.overlay{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: brown;
    opacity: .3
}
h1{
    font-size: 4em
}
p{
    font-size: 2em
}
`;

export default function Home() {
  return (
    <Wrapper>
      <div>
        <img src={SplashImg} alt="" />
        <div className="overlay"></div>
        <div className="splash__text">
          <h1>Thorson Furniture</h1>
          <p>Syracuse Utah - Est 2021</p>
        </div>
      </div>
    </Wrapper>
  );
}
