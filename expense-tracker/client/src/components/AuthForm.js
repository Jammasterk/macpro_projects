import React, {useState} from 'react'
import styled from "styled-components"
import Trees from "../assets/trees.jpg"

const Wrapper = styled.div`
  font-family: "Rajdhani", sans-serif;
  .container {
    width: 100%;
    height: 100vh;
    background: url(${Trees});
    filter: grayscale(100%);
  }
  .overlay {
    filter: blur(1.5rem);
    background: #fff;
    width: 100%;
    height: 100vh;
    opacity: 0.2;
  }
  form {
    width: 450px;
    height: 600px;
    background: purple;
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 1em;
  }
  .inputs {
    margin: auto;
    display: block;
    width: 90%;
  }
  input {
    width: 100%;
    min-width: 300px;
    height: 35px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255);
    font-size: 18px;
    margin: 24px 0;
    color: rgba(255, 255, 255);
    padding-left: 0.5em;
  }
  input:focus {
    outline: none;
    font-weight: 300;
    color: rgba(255, 255, 255);
  }

  button {
    height: 35px;
    width: 100%;
    margin-top: 48px;
    background: transparent;
    filter: grayscale(0);
    border: none;
    color: rgba(255, 255, 255);
    border: 1px solid rgba(255, 255, 255);
    font-size: 18px;
    /* padding: 1em */
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #333644;
    color: #333644;
  }

  .toggler {
    width: 14px;
  }

  p {
    cursor: pointer;
    color: rgba(255, 255, 255);
  }
  h2 {
    margin-left: 18px;
    color: rgba(255, 255, 255);
  }
`;

export default function AuthForm(props) {

    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {username, password}
    } = props

    const [show, setShow] = useState(false)

    function toggleShow(){
      setShow(!show)
    }

    return (
      <Wrapper>
        <div className="container">
          <div className="overlay"></div>
          <form action="" onSubmit={handleSubmit}>
            <h2>Expense Tracker</h2>
            <div className="inputs">
              <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange}/>
              <br />
              <input type={show ? "text" : "password"} placeholder="Password" name="password" value={password} onChange={handleChange}/>
              <br />
              <div className="password__toggle">
                <p onClick={toggleShow}>{show ? "Hide" : "Show"} password</p>
              </div>
              <br/>
              <button type="submit">{btnText}</button>
            </div>
            <p>{errMsg}</p>
          </form>
        </div>
      </Wrapper>
    );
}
