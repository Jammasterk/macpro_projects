import React, {useState} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  form {
    width: 90%;
    margin: 0 auto;
  }
  .submit__btn {
    width: 100%;
    height: 50px;
  }
  textarea: {
    resize: none;
  }
`;


export default function ProfileForm(props){
    const initInputs = {
        name: props.name || "",
        age: props.age || "",
        bio: props.bio || "",
        location: props.location || "",
        avatar: props.avatar || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props.Id)
        setInputs(initInputs)
    }

    const {name, age, bio,location} = inputs
    return (
      <Wrapper>
        <form action="" onSubmit={handleSubmit}>
          {/* <input 
            type="file" 
            name="avatar" 
            value={avatar} 
            onChange={handleChange}/> */}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Nickname"
          />
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
            placeholder="Age"
          />
          <textarea
            name="bio"
            value={bio}
            onChange={handleChange}
            placeholder="Tell them about yourself"
            rows="8"
            style={{
              height: "100px",
              border: "none",
              borderBottom: "1px solid #9E9E9E",
            }}
          ></textarea>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            placeholder="Location"
            style={{marginTop: "2em"}}
          />
          <button
            style={{marginTop: "2em"}}
            className="submit__btn btn waves-effect waves-light"
            type="submit"
          >
            {props.btnText}
          </button>
        </form>
      </Wrapper>
    );
}