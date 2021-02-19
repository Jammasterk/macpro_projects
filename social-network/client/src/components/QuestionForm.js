import React from 'react'
import styled from "styled-components"
import { MDBInput, MDBBtn } from "mdbreact";

const Wrapper = styled.div`
.container{
    background:#f7e8e8;
    min-height: 100%;
    min-width: 100vw;
    position: absolute
}
form{
    width: 85%;
    min-width: 260px;
    background: linear-gradient(145deg, #D2C5C5, #FFFFFF);
    border-radius: 5px;
    box-shadow: 9.91px 9.91px 15px #E1D3D3, -9.91px -9.91px 15px #FFFDFD;
    height: 395px;
    margin: 4em auto;
    padding: 1.5em

}

select{
    background: transparent;
    border: none;
    border-bottom: 1px solid #AAA4A4;
    border-radius: 0;
    color: #AAA4A4
}

select::focus{
    outline: none
}

`

export default function QuestionForm() {
    return (
        <Wrapper>
        <div className="container">
            <form>
            <MDBInput label="Question name" />
            <MDBInput type="textarea" label="Question body" rows="5" />
           <select className="browser-default custom-select mb-3">
                <option>-- Subject --</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <MDBBtn type="submit" className="w-75" color="elegant">submit question</MDBBtn>
            </form>
        </div>
        </Wrapper>
    )
}
