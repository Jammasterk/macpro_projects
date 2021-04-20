import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
.toggle__form{
    position: absolute;
    top: 0;
    z-index: 3;
    margin-top: 500px;
    background: transparent;
    margin-left: 1.5em;
    color: #000;
    width: auto
    
}
`

const initInputs = {username: "", password: ""}


function Auth(props){
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
        setToggle((prev) => !prev)
        resetAuthErr()
    }

    return (
      <Wrapper>
        {!toggle ? (
          <>
            <AuthForm
              handleSubmit={handleSignup}
              handleChange={handleChange}
              inputs={inputs}
              btnText="SIGNUP"
              errMsg={errMsg}
            />
            <p className="toggle__form" onClick={toggleForm}>Already a member?</p>
          </>
        ) : (
          <>
            <AuthForm
              handleSubmit={handleLogin}
              handleChange={handleChange}
              inputs={inputs}
              btnText="LOGIN"
              errMsg={errMsg}
            />
            <p className="toggle__form" onClick={toggleForm}>Not a member?</p>
          </>
        )}
      </Wrapper>
    );
}

export default Auth