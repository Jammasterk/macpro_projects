import React, {useState, useContext} from "react"
import Authform from "./Authform"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"
import { MDBInput, MDBBtn, MDBJumbotron } from "mdbreact";

const initInputs = {username: "", password: ""}

const Wrapper = styled.div`
a{
    position: absolute;
    z-index: 3;
    text-align: start;
    margin-top: 40%;
    /* margin: auto */
}

p{
    text-align: center
}
.request_toggle{
    margin-top: 2%;

}
.toggle{
    text-align: start
}
`;

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(true)
    const {login, errMsg, resetAuthErr} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    // function handleSignup(e){
    //     e.preventDefault()
    //     signup(inputs)
    // }
    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(e){
        e.preventDefault()
        setToggle(prev => !prev)
        resetAuthErr()
    }
    return (
      <>
        <Wrapper>
          {toggle ? (
            <>
              <Authform
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="LOGIN"
                errMsg={errMsg}
              />
              <p>
                <a href="/" onClick={toggleForm}>
                  Request Admin Access
                </a>
              </p>
            </>
          ) : (
            <>
              {/* <Authform 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="LOGIN"
                errMsg={errMsg}
            /> */}
              <MDBJumbotron className="w-75 mx-auto mt-5">
                <form action="mailto:jaredmanwaring@me.com" method="post" enctype="text/plain">
                  <h1>Request Admin Access Form</h1>
                  <MDBInput label="FULL NAME" type="text" name="full_name"/>
                  <MDBInput label="E-MAIL" type="text" name="email"/>
                  <MDBBtn
                    color="#59698d mdb-color lighten-1"
                    className="w-50"
                    type="submit"
                    style={{color: "#fff"}}
                    value="send"
                  >
                    Request Access
                  </MDBBtn>
                </form>
                <p className="toggle">
                  <a className="request_toggle" href="/" onClick={toggleForm}>
                    Back to admin Login
                  </a>
                </p>
              </MDBJumbotron>
            </>
          )}
        </Wrapper>
      </>
    );
}