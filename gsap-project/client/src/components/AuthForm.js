import React, {useState} from 'react'
// import ManFlying from "../assets/party.mp4"
import styled from "styled-components"

const Wrapper = styled.div`
  video {
    background: cover;
    width: 100vw;
    filter: sepia(50%);
    height: 100vh;
  }
  form {
    width: 100vw;
    padding: 1em;
    height: 400px;
    position: absolute;
    z-index: 2;
    top: 0;
    margin-top: 12em;
  }
  input {
    width: 100% !important;
    background: none;
    margin: 1em 0;
    color: #000;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #000 !important;
  }

  input:focus {
    color: #000;
  }

  button {
    width: 100%;
    margin-top: 3em;
    background: #40514e;
  }
  button:focus {
    background: #40514e;
  }
  .input-field {
    background: none;
    width: 100%;
    margin: 1.5em 0;
  }
  .row {
    background: transparent;
    width: 100%;
  }
  label {
    background: transparent;
    /* margin: .5em 0; */
  }
  p {
    background: transparent;
    margin-top: 1em;
    color: #000;
    width: 70%;
  }
  span {
    background: transparent;
    display: inline;
    width: 70%;
    color: #000
  }
  .toggler {
    margin-top: 4em;
  }
`;

export default function AuthForm(props) {

    const {
      handleChange,
      handleSubmit,
      btnText,
      errMsg,
      inputs: { username, password }
    } = props;

    const [pass, setPassword] = useState(false)

    function toggle(){
        setPassword(!pass)
    }

    return (
      <Wrapper>
        <div>
          <video autoPlay muted loop>
            {/* <source type="video/mp4" src={ManFlying} /> */}
          </video>
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field">
                <input
                  id="email"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                  name="username"
                  value={username}
                />
                <label htmlFor="email">Nickname</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type={pass ? "text" : "password"}
                  className="validate"
                  style={{ color: "#fff" }}
                  autoComplete="false"
                  onChange={handleChange}
                  name="password"
                  value={password}
                />
                <label htmlFor="password">Password</label>
                <p className="toggler">
                  <label>
                    <input onClick={toggle} type="checkbox" />
                    <span>{pass ? "Hide" : "Show"} Password</span>
                  </label>
                </p>
                <button type="submit" className="waves-effect waves-light btn" >
                  {btnText}
                </button>
              </div>
            </div>
            <p>{errMsg}</p>
          </form>
        </div>
      </Wrapper>
    );
}
