import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import styled from "styled-components"
import {UserContext} from "../context/UserProvider"

const Wrapper = styled.div`
  font-family: "Rajdhani", sans-serif;
  .member__toggle {
    position: absolute;
    top: 0;
    text-align: center;
    margin-top: 445px;
    width: 100%;
    color: rgba(255, 255, 255);
  }
`;


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
        setToggle(prev => !prev)
        resetAuthErr()
    }
    
    return(
        <Wrapper>
            <div>
            {!toggle ? (
                <>
                <AuthForm
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign up"
                    errMsg={errMsg}
                 />
                 <p className="member__toggle" onClick={toggleForm}>Already A member?</p>
                </>
            )
            :
            (
                <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    errMsg={errMsg}
                />
                <p className="member__toggle" onClick={toggleForm}>Signup Now</p>
                </>
            )}
            </div>
        </Wrapper>
    )
}

export default Auth