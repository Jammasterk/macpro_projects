import React from "react";
import moment from "moment"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import styled from "styled-components"


const Wrapper = styled.div`
  background: #fafaf6;
  min-height: 100%;
  position: absolute;
  width: 100vw;
 .md-form{
     margin-top: 3em
 }
`;

const Authform = (props) => {

    const timeFormat = moment().format("LLLL");

    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props


  return (
    <Wrapper>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ background: "#fafaf6" }}>
              <h2 style={{ fontSize: "300%" }} className="h1 display-3">
                Dashboard
              </h2>
              <p className="lead">{timeFormat}</p>
              <hr className="my-2" />
              <form action="" className="w-75 mx-auto" onSubmit={handleSubmit}>
                <h4 className="pt-5">Login to your account</h4>
                <MDBInput 
                 className="w-100"
                 name="username" 
                 value={username} 
                 onChange={handleChange} 
                 label="USERNAME" />
                <MDBInput
                  className="mt-4 w-100"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="PASSWORD"
                  type="password"
                />
                <MDBBtn
                  style={{ color: "#fff" }}
                  className="w-100"
                  color="#424242 grey darken-3"
                  type="submit"
                >
                  {btnText}
                </MDBBtn>
                <p>{errMsg}</p>
              </form>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

export default Authform;
