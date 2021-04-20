import React, {useState} from "react"
import ProfileForm from "./ProfileForm"
import styled from "styled-components"

const Wrapper = styled.div`
    p{
        font-size: 18px;
        width: 100%
    }
    a{
        margin: 0 1em
    }
    .container{
        width: 100%;
        /* margin: 0 auto */
    }
    img{
        height: 100%
    }
    span{
        margin-left: .25em;
        position: absolute;
        left: 0;
        margin-top: 7.5em;
        background: none;
        color: #000
    }
    /* .card_styling{
        width: 90%
    } */
   .card-content{
       width: 90%;
       margin: 0 auto
   }
   .bio{
       padding: .5em
   }
   .buttons{
       background: transparent
   }
`;

export default function Profile(props){
    const { name, age, bio, location, _id, avatar} = props;
    const [editToggle, setEditToggle] = useState(false)

    return (
      <Wrapper>
        <div className="container">
          {!editToggle ? (
            <>
              <div className="row" style={{ width: "100%", marginTop: "4em" }}>
                <div className="">
                    <div className="card-content">
                  <div className="card card_styling">
                    <div className="card-img">
                      <img
                        src={avatar}
                        alt=""
                      />
                      <span className="card-title">
                        {name}, {age}
                      </span>
                      <p style={{ marginLeft: ".5em", marginTop: "1em" }}>
                        Location: {location}
                      </p>
                    </div>
                      <p className="bio">Bio: {bio}</p>
                    </div>
                  </div>
                  <a
                    onClick={() => setEditToggle((prevToggle) => !prevToggle)}
                    class="buttons btn-floating btn-large waves-effect waves-light red"
                    style={{ background: "blue" }}
                    type="submit"
                  >
                    <i class="material-icons">edit</i>
                  </a>
                  <a
                    onClick={() => props.deleteProfile()}
                    href="#"
                    class="buttons btn-floating btn-large waves-effect waves-light "
                    type="submit"
                  >
                    <i class="material-icons">delete</i>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <ProfileForm
                  name={name}
                  age={age}
                  bio={bio}
                  location={location}
                  btnTxt="Submit Edit"
                  _id={_id}
                  submit={props.updateProfile}
                />
                <button className="closeBtn">Close</button>
                {/* onClick={() => setEditToggle((prevToggle) => !prevToggle)} */}
              </div>
            </>
          )}
        </div>
      </Wrapper>
    );
}