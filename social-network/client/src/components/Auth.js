import React, {useState, useContext} from "react"
import AuthForm from "./Authform"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`

.toggle{
    position: absolute;
    z-index: 3;
    text-align: center;
    // top: 0;
    width: 100%;
    margin-top: 375px;
    color: #fff

}
`

const initInputs = {
    username: "",
    password: ""
}

function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {
        signup,
        login,
        errMsg,
        resetAuthErr
    } = useContext(UserContext)

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

    return(
        <Wrapper>
{!toggle ? (
    <>
    <AuthForm
        handleChange={handleChange}
        handleSubmit={handleLogin}
        inputs={inputs}
        btnText="Login"
        errMsg={errMsg}
    />
    <p className="toggle" onClick={toggleForm}>Not a member</p>
    </>
) : (
    <>
    <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSignup}
        inputs={inputs}
        btnText="Signup"
        errMsg={errMsg}
    />
    <p className="toggle" onClick={toggleForm}>Already a member?</p>
    </>
)}
        </Wrapper>
    )
}

export default Auth