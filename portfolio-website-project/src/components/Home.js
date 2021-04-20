import React, {useState, useEffect, useRef} from 'react'
import { TweenMax, Power3 } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import styled from "styled-components"
import Woman from "../assets/women-with-flower-arrangement.jpg"
import BlackAndWhite from "../assets/woman-wearing-gilligans-island-hat.jpg"
import MenStandingTogether from "../assets/men-standing-together.jpg"
import PersianTableSetting from "../assets/persian-table-setting.jpg"
import MotorCanoe from "../assets/motor-canoe.jpg"

const Wrapper = styled.div`
  .jumbotron {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: #f5f5f5;
  }

  .jumbo_img {
    background-position: center;
    background-size: cover;
    background-repeat: none;
    width: 50vw;
    height: 100vh;
    margin-left: -100%;
    opacity: 0;
  }

  .jumbo_right {
    padding-top: 6em;
    padding: 4em;
    opacity: 0;
    margin-top: 30%;
  }

  h1 {
    font-size: 40px;
    font-family: "Montserrat", serif;
    color: #4b4848;
    margin-bottom: 1.5em;
    opacity: 0;
    font-weight: 200;
  }
  p {
    font-family: "Montserrat", serif;
    line-height: 32px;
    opacity: 0;
    margin-top: -100%;
    font-weight: 400;
  }
  main {
    /* height: 100vh;
    width: 100%; */
    display: grid;
    grid-template-areas:
     'a a c c'
     'b b c c'
     'b b d d'

  }
  .a{
      /* min-width: 100%; */
      height: 100%
  }

  .area_one{
    grid-area: a
  }

  .area_two{
    grid-area: d
  }
  .area_three{
    grid-area: b
  }
  .area_four{
    grid-area: c
  }
`;



// gsap.registerPlugin(ScrollTrigger)

function Home() {

    let left = useRef(null)
    let right = useRef(null)
    let paraText = useRef(null)
    let title = useRef(null)

    useEffect(() => {
        TweenMax.to(
            left,
            1.6,
            {
                marginLeft: 0,
                opacity: 1,
                // ease: Power3.easeIn

            }
        )
        TweenMax.to(
            right,
            1.6,
            {
                opacity: 1
            }
        )
        TweenMax.to(
            paraText,
            1.5,
            {
                delay: .75,
                opacity: 1,
                marginTop: 0
            }
        )
        TweenMax.to(
            title,
            1.5,
            {
                opacity: 1,
                delay: 2
            }
        )
    })


    return (
      <Wrapper>
        <div className="jumbotron">
          <div className="left_jumbo">
            <img
              className="jumbo_img"
              ref={(el) => {
                left = el;
              }}
              src={Woman}
              alt=""
            />
          </div>
          <div
            ref={(el) => {
              right = el;
            }}
            className="jumbo_right"
          >
            <h1
              ref={(el) => {
                title = el;
              }}
            >
              Discover Inspiration in Art
            </h1>
            <p
              ref={(el) => {
                paraText = el;
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              reiciendis veniam dolorum ea corrupti repellat vitae consequuntur,
              aspernatur totam facere, eligendi recusandae nisi inventore earum?
              Rem voluptas id atque ut consequatur ducimus voluptatem harum
              similique.
            </p>
          </div>
        </div>
        <main>
        </main>
      </Wrapper>
    );
}

export default Home
