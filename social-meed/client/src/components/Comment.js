import React, {useState} from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  textarea {
    resize: none;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-family: "Lato", sans-serif;
    font-weight: 100;
    height: 150px
  }

  textarea:focus {
    outline: none;
  }
  button {
    width: 92%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 45px;
    border: none;
    background: #085f63;
    color: #fff;
    font-size: 20px;
    margin-top: 1em;
  }
  small {
    margin-left: 1.5em;
    margin-top: 62em;
  }
`;

export default function Comment() {

    const [counter, setCounter] = useState(240)
    
    
    function charCounter(){
        setCounter(counter - 1)
    }

    function charTwo(){
        setCounter(counter + 1)
    }
    
  
    
    


    

    return (
        <Wrapper>
        <div>
            <textarea maxLength="240" onChange={() => {charCounter()}} name="" id="textCount" cols="30" rows="10"></textarea>
            <small>Characters left: {counter}</small>
            <button type="submit">Add Comment</button>
        </div>
        </Wrapper>
    )
}
