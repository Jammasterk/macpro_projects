import React from 'react'
import styled from "styled-components"
import Box from "../assets/man-woman-boxes.jpeg"

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 100;

  img {
    background-size: cover;
    min-height: 100vh;
    width: 100vw;
    filter: grayscale(0.5);
  }
  form {
    position: absolute;
    top: 0;
    width: 100vw;
    padding: 2em;
    margin-top: 50%;
  }
  input,
  button {
    width: 100%;
    margin: 1em 0;
    height: 40px;
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
  }

  input::placeholder {
    color: #fff;
  }

  button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
  }

  button:hover{
      background: #fff;
      color: #000
  }

  h1 {
    color: #fff;
    font-size: 28px;
    margin-top: 1em
  }
`;

function AccessForm(props) {

    const {
        handleSubmit,
        handleChange,
        inputs: {
            name, email
        }
    } = props

    return (
      <Wrapper>
        <div className="background">
          <img src={Box} alt="" />
          <form action="" onSubmit={handleSubmit}>
              <h1>Request Early Access</h1>
              <input type="text" id="" placeholder="Full name" name="name" value={name} onChange={handleChange}/>
              <br/>
              <input type="email" id="" placeholder="Email" name="email" value={email} onChange={handleChange}/>
              <br/>
              <button type="submit">REQUEST ACCESS</button>
          </form>
        </div>
      </Wrapper>
    );
}

export default AccessForm
