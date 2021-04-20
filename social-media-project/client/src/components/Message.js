import React, {useState} from 'react'
import styled from "styled-components"
import InputEmoji from "react-input-emoji";


const Wrapper = styled.div`
  .container {
    width: 325px;
    height: 750px;
    border: 1px solid #324e7b;
    margin: auto;
    margin-top: 4em;
    padding: 16px;
    border-radius: 6px;
    border-radius: 6px;
    background: #324e7b;
    box-shadow: 20px 20px 60px #2b4269, -20px -20px 60px #3a5a8d;
  }
  .message__container {
    height: 60%;
    width: 100%;
    background: #86a6df;
    border-radius: 6px 6px 0 0;
  }
  select{
      width: 100% !important;
      height: 30px;
      margin-bottom: 1em
  }
  .reply__container {
    height: 20%;
    width: 100%;
    background: transparent
  }
  .react-input-emoji--input {
    background: #f3f3f3;
    z-index: 2;
    border-radius: 0.25em;
    /* display: none; */
  }
  .react-input-emoji--container {
    background: none;
    border: none;
  }
  .input {
    background: none !important;
    display: none !important;
  }
  .react-emoji-picker--wrapper .react-emoji-picker--wrapper__show {
    margin-top: 20em;
  }
  img {
    background: none;
  }
  .submit__btn {
    width: 100%;
    height: 45px;
    border: none;
    background: #9e579d;
    font-size: 24px;
    color: #f3f3f3;
}
select {
    text-align: center;
    color: #fff
};

select:focus{
    outline: none
}
li{
    background: transparent
}
`;

export default function Message() {
     
const [text, setText] = useState("");

function handleOnEnter(text) {
  console.log("enter", text);
}

    return (
      <Wrapper>
        <div className="container">
          {/* <input type="color" name="" id="" /> */}
          <select name="" id="">
            <option value="general">--Pick Room--</option>
            <option value="general">General</option>
          </select>
          <div className="message__container"></div>
          <div className="reply__container">
            <div className="emoji__container">
              <div className="flex">
                <InputEmoji
                  value={text}
                  onChange={setText}
                  cleanOnEnter
                  onEnter={handleOnEnter}
                  placeholder="Type a message"
                  className="input"
                />
              </div>
            </div>
            <button className="submit__btn">SEND</button>
          </div>
        </div>
      </Wrapper>
    );
}
