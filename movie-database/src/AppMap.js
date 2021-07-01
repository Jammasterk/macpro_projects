import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    p{
        color: #fff;
        font-family: "Roboto Mono", monospace;
    }
    .title-container{
        background: linear-gradient(145deg, #3b4d55, #4f6873);
    border-radius: 8px;
    box-shadow: 9.91px 9.91px 15px #3f525b, -9.91px -9.91px 15px #4b626d;
    padding: 1em;
    width: 300px
    }
`

export default function AppMap({Title, Year, Type, Poster}) {

    function isImage(){
        if(Poster === ""){
            return <h1>Sorry! No image available</h1>
             
        }
        else{
            return <img src={Poster} alt="" /> 
        }
    }
    return (
        <Wrapper>
        <div className="title-container">
           <p>{Title}</p>
           <img src={Poster} alt="" /> 
           {isImage}
           <br />
           <small>Release year: {Year}</small>
           <br />
           <small>Format: {Type}</small>
        </div>
        </Wrapper>
    )
}
