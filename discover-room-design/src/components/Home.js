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
    height: 100vh;
    position: absolute;
  }

  img {
    width: 100%;
    min-width: 700px;
  }
  .showcase_left {
    margin-left: -100%;
    position: relative;
  }
  .showcase {
    display: flex;
    min-width: 100%;
    height: 65%;
  }
  .showcase_right {
    /* width: 40%; */
    /* padding: 4.8em; */
    margin-top: 4em;
    margin-left: 1em;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 1.5em;
    font-family: "Spartan";
    padding-left: 0.5em;
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
    padding-left: 2em;
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

  /* .footer-img {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%
  } */

  .footer-img {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    overflow: hidden;
    position: absolute;
    /* height: 30% */
  }
  .dark_img,
  .light_img,
  .middle_text {
    height: 100%;
  }
  .images {
  }
  .bottom-box {
    font-size: 12px;
    padding: 1.5em;
    width: 450px;
    opacity: 0;
    padding-top: 6em;
  }
  h2 {
    font-family: "Spartan";
    margin-bottom: 1em;
  }
  .left_img {
    margin-left: -100%;
    min-width: 0;
    height: 100%;
  }
  .right_img {
    /* height: 100%; */
    min-width: 0;
    /* opacity: 0; */
    right: -100%;
    position: relative;
    height: 100%;
  }
  .para {
    padding: 2em;
  }

  .mobile-text{
      display: none
  }
  @media only screen and (max-width: 1070px) {
      .container{
          height: 100vh;
          width: 100vw !important
      }
      img{
          width: 100%;
          min-width: 0
      }
    .showcase {
      display: block;
      height: 60%
    }
    .showcase_right {
      position: absolute;
      top: 0;
      left: 0;
    }
    h2 {
      margin-bottom: 1.5em;
    }
    .footer-text {
      display: none;
      width: 0
    }
    .foot-title {
      display: none;
    }
    h1,
    .para {
      color: #3e4a61;
      padding-bottom: 0
    }
    .bottom-box{
        /* height: 100%; */
        width: 0
    }
    .footer-img{
        display: grid;
        grid-template-columns: repeat(2, 50%);
        /* display: flex; */
        /* position: relative; */
        width: 100vw
        /* margin-top: 10% */
    }
    .left_img{
        width: 100%
    }

    .mobile-text{
        padding: 1em;
        margin-bottom: 1em 0;
        display: block;
        width: 100%;
        opacity: 0
    }
  }
  @media only screen and (max-width: 375px){
    .footer-img{
        display: block;
        /* height: fit-content */
    }
  }
`;

export default function Home(){

    let heroLeft = useRef(null)
    let heroRight = useRef(null)
    let shopLink = useRef(null)
    let leftImg = useRef(null)
    let rightImg = useRef(null)
    let footerText = useRef(null)
    let mobile = useRef(null)

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
                right: 0,
                ease: Power3.easeIn,
                delay: 1.5,
                // opacity:1,
                
                
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
        TweenMax.to(
            mobile,
            1.6,
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
              <img src={HeroOne} alt="" />
            </div>
            
            <div className="showcase_right">
              <div
                ref={(el) => {
                  heroRight = el;
                }}
                className="hero_text"
              >
                <h1>Discover innovative ways to decorate</h1>
                <p className="para">
                  We provide unmatched quality, comfort, and style for property
                  owners across the country. Our experts combine form and
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
              <div className="next"></div>
            </div>
          </div>
          <div className="mobile-text"
            ref={el => {mobile = el}}
          >
            <h2 className="foot-title-two">ABOUT OUR FURNITURE</h2>
            <p className="footer-text-two">
              Our multifunctional collection blends design and function to suit
              your individual taste, Make each room unique, or pick a cohesive
              theme that best expresses your interests and what inspires you.
              Find the furniture pieces you need, from traditional to
              contemporary styles or anything in between. Product specialists
              are available to help create your dream space
            </p>
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
              <h2 className="foot-title">ABOUT OUR FURNITURE</h2>
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
            {/* <hr/> */}
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