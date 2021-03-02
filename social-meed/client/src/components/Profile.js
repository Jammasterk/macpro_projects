import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  .header{
      display: flex;
      margin: 0 auto;
      width: 90%
  }
  img{
      width: 90px;
      height:90px;
      margin-right: 1em
  }
`;


export default function Profile() {
    return (
      <Wrapper>
        <div>
          <div className="container">
            <div className="header">
              <img
                src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="profile__img"
              />
              <div className="details">
                <small>Jared Manwaring</small>
                <br />
                <small>Age: 29</small>
                <br />
                <small>Location: Denver CO</small>
              </div>
            </div>
            <div className="body"></div>
            <div className="posts">
                
            </div>
          </div>
        </div>
      </Wrapper>
    );
}
