import React, {useRef, useEffect, useState} from 'react'
import Nav from "./Nav"
import SkateBorder from "../assets/skateboarder.jpg";
import styled from "styled-components"
import moment from "moment"
import gsap from "gsap"
import Signup from "./Signup"

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
    // filter: blur(25px)
  }

//   .filter{
//       position: absolute;
//       height: 100%;
//       width: 100vw;
//       filter: blur(1)
//       background: #222323;
//       top: 0;
//       left: 0;
//       z-index: -1

//   }
  h1{
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-weight: 200;
      color: #fff; 
  }
  .home__btn{
      padding: 1.25em 3.5em;
      position: absolute;
      right: 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 200;
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
      margin-right: 10%;
      bottom: 0;
      margin-bottom: 15%;
      opacity: 1
  }
  .modal{
    opacity: 0
  }

  .btn{
      opacity: 0;
    //   display: none
  }
`

export default function Home() {

    let time = useRef(null)
    let myAnimation = useRef(null)
    let animationButton = useRef(null)
    let myAnimationClose = useRef(null)
    let window = useRef(null)

    const [toggle, setToggle] = useState(true)


    setInterval(() => {
        gsap.to(time, {
            opacity: .5
        })
    }, 3000)

    function toggleModal(){
        setToggle(!toggle)
        gsap.to(
            myAnimation, .75, {
                opacity: 1,
                display: 'block'
            }
        )
    }

    function toggleModalClose(){
        // setToggle(!toggle)
        gsap.to(
            myAnimation,
            .75, {
                opacity: 0,
                display: "none"
            }
        )
    }

   
    

    const timeFormatted = moment().format('LTS');
    return (
        <div>
            <Wrapper>
            <img src={SkateBorder} alt="" />
            
            <h1 ref={el => {time = el}}>{timeFormatted}</h1>
            <button ref={el => {animationButton = el}} onClick={toggle ? toggleModal : toggleModalClose} className="home__btn">{toggle ? "SIGNUP" : "CLOSE"}</button>
            
            <div ref={el => {myAnimation = el}} className="modal">
                <Signup />
            </div>
            </Wrapper>
            <Nav />
        </div>
    )
}
