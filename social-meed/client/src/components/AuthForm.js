import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  img {
    background-size: cover;
    background-position: center;
    filter: grayscale(1);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
  }
  form {
    width: 90%;
    height: 650px;
    margin: 0 auto;
    background: grey;
    position: relative;
    z-index: 3;
    padding: 1em;
    opacity: 0.7;
    margin-top: 150px;
    border-radius: 5px;
  }
  input {
    width: 100%;
    position: relative;
    z-index: 5;
    margin: 1.5em 0;
    height: 45px;
    font-size: 24px;
    background: transparent;
    color: #fff;
    border: none;
    border-bottom: 2px solid #fff;
  }

  input:focus {
    outline: none;
  }
  button {
    width: 100%;
    margin-top: 2em;
    height: 65px;
    background: transparent;
    border: 4.5px solid white;
    color: #fff;
    font-size: 24px;
  }
  label {
    color: white;
  }
  h1 {
    margin: 1em 0;
    font-size: 38px;
    color: #fff;
  }
  small {
    font-size: 16px;
    color: #fff;
  }
  .error {
    position: absolute;
    z-index: 6;
    color: red;
    top: 0
  }
`;

export default function AuthForm(props) {

    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {email, password}
    } = props

    const [show, setShow] = React.useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    return (
      <Wrapper>
        <div>
          <img
            src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <form action="" onSubmit={handleSubmit}>
            <h1>Food Porn</h1>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleChange}
            />
            <small style={{textAlign: "start"}} onClick={toggleShow}>{show ? "Hide" : "Show"} Password</small>
            <button type="submit">{btnText}</button>
          </form>
            <p className="error">{errMsg}</p>
        </div>
      </Wrapper>
    );
}
