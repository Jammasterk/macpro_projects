import React from "react";
import styled from "styled-components";
import gsap from "gsap";

const Wrapper = styled.div`
background: blue !important;

.container__one{
    width: 100vw;
    height: 100%;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
  }
  .controls{
      padding: 1em
  }
  form{
      width: 25%;
      padding: 1em;
      border-radius: 16px;
      border: 2px solid #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 350px;
      height: 525px;
      margin-top: -250px; /* Half the height */
      margin-left: -175px; /* Half the width */
  }

  input{
      background: transparent;
      border: 2px solid #fff;
      color: #fff
  }
  input, button{
      padding: .75em;
      margin: 1em 0;
      width: 100%
  }
  label{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 200;
    color: #fff
  }
  .signup__btn{
    padding: .75em;
    margin: 1em auto;
    width: 100%;
    position: relative;
    background: transparent;
      border: 2px solid #fff;
      color: #fff;
      margin-right: 10%;
      bottom: 0;
  }
  small{
      color: #fff;
      margin-bottom: 1em
  }
  a{
      color: blue;
  }
`;

export default function Signup() {

  return (
    <Wrapper>
        <div className="container__one">
      <div clasName="filter">
        <form action="">
          <h1>SIGNUP</h1>
          <hr />
          <div className="controls">
              <label htmlFor="">EMAIL</label>
            <input type="text" />
            <br />
            <label htmlFor="">USERNAME</label>
            <input type="text" />
            <br />
            <label htmlFor="">Password</label>
            <input type="text" />
            <br />
            <label htmlFor="">CONFIRM PASSWORD</label>
            <input type="text" />
            <br />
            <small>I agree to the <a href="">terms of service</a></small>
            <button className="signup__btn">SIGNUP</button>
          </div>
        </form>
        </div>
      </div>
    </Wrapper>
  );
}
