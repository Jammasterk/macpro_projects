import React, {useState} from 'react'
import ManFlying from "../assets/pexels-cottonbro-6700092.mp4"
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
    height: 450px;
    position: absolute;
    z-index: 2;
    top: 0;
    margin-top: 12em;
  }
  input {
    width: 100% !important;
    background: none;
    margin: 1em 0;
  }

  input:focus {
    color: #fff;
  }

  a {
    width: 100%;
    margin-top: 3em;
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
    color: #fff;
    width: 70%;
  }
  span {
    background: transparent;
    display: inline;
    width: 70%;
  }
`;

export default function Auth() {

    const [password, setPassword] = useState(false)

    function toggle(){
        setPassword(!password)
    }

    return (
      <Wrapper>
        <div>
          <video autoPlay muted loop>
            <source type="video/mp4" src={ManFlying} />
          </video>
          <form action="">
            <div className="row">
                <div className="input-field">
                  <input
                    id="email"
                    type="text"
                    className="validate"
                    
                  />
                  <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="password"
                     type={password ? "text" : "password"}
                      className="validate"
                      style={{color: "#fff"}}
                      
                    />
                    <label htmlFor="password">Password</label>
                    <p>
                      <label>
                        <input onClick={toggle} type="checkbox" />
                        <span>{password ? "Hide" : "Show"} Password</span>
                      </label>
                    </p>
                    <a href="/" className="waves-effect waves-light btn">
                      SIGNUP
                    </a>
                </div>
              </div>
          </form>
        </div>
      </Wrapper>
    );
}
