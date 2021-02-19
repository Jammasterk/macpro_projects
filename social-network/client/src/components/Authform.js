import React from 'react'
import styled from "styled-components"
import { MDBInput, MDBBtn } from "mdbreact";
const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    
    .container{
        min-height: 100%;
        min-width: 100vw;
        width: 100vw;
        background: rgb(98,146,154);
        background: linear-gradient(135deg, rgba(98,146,154,1) 30%, rgba(239,236,236,1) 100%);
        margin: 0 !important;
        position: absolute
    }

    form{
        width: 45%;
        min-width: 300px;
        height: 400px;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        padding: 1.5em;
        margin: 70px auto
    }
    img{
        width: 45%;
        min-width: 300px;
        background: transparent
    }
    h4{
        margin-top: 30px;
        color: #CED4DA
    }

    label{
        color: #CED4DA
    }

input{
    color: #ced4da
}
    input:focus{
        color: #ced4da
    }

`
export default function Authform(props) {

    const {handleChange, handleSubmit, btnText, errMsg, inputs: {username, password}} = props
    return (
        <Wrapper>
        <div className="container">
            <div className="graphic">
                
            </div>
            <form onSubmit={handleSubmit}>
                <h4>Signup / Login</h4>
            <MDBInput label="Username" value={username} name="username" onChange={handleChange}/>
            <MDBInput type="password" label="password" value={password} name="password" onChange={handleChange}/>
            <MDBBtn type="submit" className="w-100" color="blue-grey">{btnText}</MDBBtn>
            <small>{errMsg}</small>
            </form>
        </div>
        </Wrapper>
    )
}
