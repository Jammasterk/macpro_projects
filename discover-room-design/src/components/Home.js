import React, {useRef, useEffect} from "react"
import styled from "styled-components"
import HeroOne from "../assets/desktop-image-hero-1.jpg"
import {Link} from "react-router-dom"
import Dark from "../assets/image-about-dark.jpg"
import Light from "../assets/image-about-light.jpg"
import {TweenMax,  Power3} from "gsap"

const Wrapper = styled.div`
  color: #403f3f;

  .container {
    width: 100%;
    max-height: 100vh;
    position: absolute;
  }

  img {
    width: 100%;
    min-width: 700px;
    height: 550px;
  }
  .showcase_left {
    margin-left: -100%;
    position: relative;
  }
  .showcase {
    display: flex;
    height: 80%;
  }
  .showcase_right {
    width: 40%;
    padding: 4.8em;
    margin-top: 2em;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 1.5em;
    font-family: "Spartan";
  }
  p {
    font-size: 14px;
    line-height: 1.5em;
    font-family: "Spartan";
    font-weight: 200;
  }
  .shop {
    margin-top: 2em;
    font-family: "Spartan";
    letter-spacing: 16px;
  }
  .link_to_shop {
    text-decoration: none;
    color: #403f3f;
    opacity: 0;
  }

  .hero_text {
    opacity: 0;
  }

  .spread {
    /* width: 350px; */
    /* position: absolute */
  }

  .footer-img {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%
  }
  .dark_img,
  .light_img,
  .middle_text {
    height: 100%;
  }
  .images {
    width: 450px;
    min-width: 0;
    height: 100%;
  }
  .bottom-box {
    font-size: 12px;
    padding: 1.5em;
    width: 450px;
    opacity: 0;
    height: 100%
  }
  h2 {
    font-family: "Spartan";
    margin-bottom: 1em
  }
  .left_img{
      margin-left: -100%;
      height: 100%
  }
  .right_img{
    margin-right: -100%;
    height: 100%
  }
  
`;

export default function Home(){

    let heroLeft = useRef(null)
    let heroRight = useRef(null)
    let shopLink = useRef(null)
    let leftImg = useRef(null)
    let rightImg = useRef(null)
    let footerText = useRef(null)

    useEffect(() => {
        TweenMax.to(
            heroLeft,
            1.5,
            {
              marginLeft: 0,
              ease: Power3.easeIn  
            }
        )
        TweenMax.to(
            heroRight,
            1.5,
            {
                opacity: 1,
                delay: 1.5,
                ease: Power3.easeIn
            }
        )
        TweenMax.to(shopLink, 1.7, {
          opacity: 1,
          delay: 1.5,
          ease: Power3.easeIn,
        });
        TweenMax.to(
            leftImg,
            2.5,
            {
                marginLeft: 0,
                ease: Power3.easeIn,
                delay: 1.5
            }
        )
        TweenMax.to(
            rightImg,
            2.5,
            {
                marginRight: 0,
                ease: Power3.easeIn,
                delay: 1.5
            }
        )
        TweenMax.to(
            footerText,
            1.5,
            {
                opacity: 1,
                ease: Power3.easeIn,
                delay: 1.5
            }
        )
    })

    return (
      <Wrapper>
        <div className="container">
          <div className="showcase">
            <div
              ref={(el) => {
                heroLeft = el;
              }}
              className="showcase_left"
            >
              <img style={{ height: "100%" }} src={HeroOne} alt="" />
            </div>
            <div className="showcase_right">
              <div
                ref={(el) => {
                  heroRight = el;
                }}
                className="hero_text"
              >
                <h1>Discover innovative ways to decorate</h1>
                <p>
                  We provide unmatched quality, comfort, and style for property
                  owners across the country Our experts combine form and
                  function in bringing your vision to life. Create a room in
                  your own style with out collection and make your property a
                  reflection of you and what you love.
                </p>
              </div>
              <div className="shop">
                <Link
                  ref={(el) => {
                    shopLink = el;
                  }}
                  className="link_to_shop"
                  to="/"
                >
                  SHOP NOW
                </Link>
              </div>
              <div className="next">

              </div>
            </div>
          </div>
          <div className="footer-img">
            <img
              ref={(el) => {
                leftImg = el;
              }}
              className="images left_img"
              src={Dark}
              alt=""
            />
            <div
              className="bottom-box"
              ref={(el) => {
                footerText = el;
              }}
            >
              <h2>ABOUT OUR FURNITURE</h2>
              <p className="footer-text">
                Our multifunctional collection blends design and function to
                suit your individual taste, Make each room unique, or pick a
                cohesive theme that best expresses your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help create your dream
                space
              </p>
            </div>
            <img
              ref={(el) => {
                rightImg = el;
              }}
              className="images right_img"
              src={Light}
              alt=""
            />
          </div>
        </div>
      </Wrapper>
    );
}