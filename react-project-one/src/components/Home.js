import React from 'react'
import Nav from "./Nav"
import SkateBorder from "../assets/skateboarder.jpg";
import styled from "styled-components"

const Wrapper = styled.div`
img {
    width: 100vw;
    background-size: cover;
    height: 100%;
    // background-positon: top
    position: absolute;
    top: 0;
    z-index: -2;
    overflow: hidden;
  }
`

export default function Home() {
    return (
        <div>
            <Wrapper>
            <img src={SkateBorder} alt="" />

            </Wrapper>
            <Nav />
        </div>
    )
}
