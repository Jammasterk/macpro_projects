import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
  p {
    position: absolute;
    text-align: center;
    width: 100%;
    color: #f7f7f7;
    font-size: 24px;
    cursor: pointer;
    font-family: "Lato", sans-serif;
    font-weight: bold;
  }
`;

const initInputs = {email: "", password: ""}

function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }
    return (
      <Wrapper>
        <div>
          {!toggle ? (
            <>
              <AuthForm
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="SIGN UP"
                errMsg={errMsg}
              />
              <p onClick={toggleForm}>Already a member?</p>
            </>
          ) : (
            <>
              <AuthForm
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="LOGIN"
                errMsg={errMsg}
              />
              <p onClick={toggleForm}>Sign up Now</p>
            </>
          )}
        </div>
      </Wrapper>
    );
}

export default Auth

