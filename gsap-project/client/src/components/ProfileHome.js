import React, {useContext} from "react"
import ProfileList from "./ProfileList"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`

  .margin-styling {
    margin: 2em 0;
  }
  .styling {
    font-size: 22px;
    color: #fff;
    text-align: center;
  }
`;

export default function ProfileHome(){
    const {user: {username}, addProfile, updateProfile} = useContext(UserContext)
    return (
      <Wrapper>
        <div className="body">
          <div className="margin-styling">
            <p className="styling">Hi {username}</p>
            <p className="styling">CREATE A PROFILE</p>
          </div>
          <ProfileList addProfile={addProfile} updateProfile={updateProfile} />
        </div>
      </Wrapper>
    );
}
