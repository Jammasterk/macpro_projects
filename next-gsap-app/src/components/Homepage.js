import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`

.container{
    display: flex;
    width: 100vw
}
  .left_container {
    width: 40%;
    height:100vh;
    background: url("https://images.pexels.com/photos/5109899/pexels-photo-5109899.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    background-position: center;
    background-repeat: no-repeat;

  }
`;

const Homepage = () => {
    return (
      <Wrapper>
        <div className="container">
            <div className="left_container"></div>
            <div className="right_container">
                <h1>Explore Denver</h1>
            </div>
        </div>
      </Wrapper>
    );
}
export default Homepage