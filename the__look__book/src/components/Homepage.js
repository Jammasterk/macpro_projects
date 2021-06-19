import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import gsap, { Power3, Bounce, Elastic } from "gsap";
import Home__img from "./assets/woman-eyes.jpeg";

const Wrapper = styled.div`
  img {
    width: 50%;
    display: block;
    // margin-left: auto;
    // margin-right: auto;
    background-position: center;
    position: fixed;
    // top: -675px;
    overflow-y: hidden;
    // opacity: 0.48;
    opacity: 0;
    min-height: 100vh;
    background: cover;
    margin: 0 auto;
    left: 25%;
    height: 0
  }

  .container {
    width: 100vw;
  }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100vw;
    }
    .overlay__left {
      height: 100%;
      width: 50vw;
      background: #463b3b;
      opacity: 0;
      font-family: "Montserrat", sans-serif;
    }

    .overlay__right {
      position: absolute;
      z-index: 2;
      bottom: 0;
      right: 0;
      padding: 2.75em;
      display: none
    }

    h1 {
      position: absolute;
      font-size: 80px;
      font-weight: 200;
      margin: 3.5em 0.75em;
      color: #707070;
    }

    h1:hover {
      text-decoration: line-through;
      text-decoration-thickness: 1px;
    }

    p {
      color: #a4a4a4;
      font-family: "Indie Flower", cursive;
      font-size: 45px;
      text-align: center;
    }
    svg {
      text-align: center;
      background: rgba(163, 163, 163, 0.3);
      padding: 0.25em;
      border-radius: 20px;
      display: block;
      margin: auto;
    }

  .line {
    height: 16px;
    width: 0;
    background: #5c5757;
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    opacity: .6
  }
  .overlay__left{
    //   display: none
  }
  h1{
      display: none
  }
`;

// Center Image

// img{
//     display: inline-block;
//     margin: auto;
//     height: 100vh;
//     display: block;
//     margin-left: auto;
//     margin-right: auto;

// }

export default function Homepage() {


    
        var image = useRef(null);
        var line = useRef(null);
        var left = useRef(null)
        var right = useRef(null)
        var title = useRef(null)
        var scroll = useRef(null)

        useEffect(() => {
          gsap.to(image, 1.75, {
            opacity: 1,
            
          });
      
          gsap.to(image, .5, {
              delay: 1.75,
              right: '-25%',
              
          })
      
          gsap.to(image, 1.5,{
              delay: 1.95,
              width: "100%",
              left: 0,
              margin: 0,
              height: "160%",
              top: -100
              
              
          })
          gsap.to(image, {
              delay: 3,
              opacity: .48
          })
      
          gsap.to(left, {
              delay: 3.6,
              opacity: .42,
              ease: Power3.easeIn
          })
      
          
          gsap.to(line, 4, {
            width: "100%",
            ease: Power3.easeIn,
            
          //   height: '6px',
          });
      
          gsap.to(line, {
              height: "6px",
              delay: 4.5
          })
          gsap.to(title, 1.75, {
              delay: 3.4,
              display: "block"
          })
          gsap.to(right, 1.75, {
              delay: 4,
              display: "block",
              ease: Power3.easeIn
          }) 
          gsap.to(scroll , .75,{
              delay: 4,
            //   duration: .75,
              ease: Elastic.easeInOut(.75),
              y: 10,
              repeat: 3
          })    
    })


    
        function mouseMove(){
            setTimeout(() => {
                const line = document.querySelector('.line')
            const line2 = document.querySelector('#line')
            line.addEventListener('mousemove', () => {
                line2.style.height = "16px"
            })
            }, 3000)
            
        }

   
  return (
    <Wrapper>
      <div className="container">
        <img ref={(el) => (image = el)} src={Home__img} alt="" />
        <div className="overlay">
          <div className="overlay__left" ref={el => {left = el}} onMouseMove={mouseMove}>
            <h1 ref={el => {title = el}}>
              Live Life <br /> Beautiful
            </h1>
          </div>
          <div
          ref={el => {right = el}}
          className="overlay__right">
            <p>Sit back and enjoy</p>
            <p>or</p>
            <svg
              ref={el => {scroll = el}}
              id="Component_1_1"
              data-name="Component 1 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="40.273"
              height="97.416"
              viewBox="0 0 40.273 97.416"
            >
              <path
                id="Icon_material-mouse"
                data-name="Icon material-mouse"
                d="M28.654,1.605v19.96h17.62A20.107,20.107,0,0,0,28.654,1.6ZM6,36.668a20.137,20.137,0,0,0,40.273,0V26.6H6ZM23.62,1.6A20.107,20.107,0,0,0,6,21.565H23.62V1.605Z"
                transform="translate(-6 19.506)"
                fill="#a3a3a3"
              />
              <path
                id="Icon_awesome-angle-down"
                data-name="Icon awesome-angle-down"
                d="M10.055,24.771.492,15.209a1.681,1.681,0,0,1,0-2.384l1.589-1.589a1.681,1.681,0,0,1,2.384,0l6.778,6.778,6.778-6.778a1.681,1.681,0,0,1,2.384,0l1.589,1.589a1.681,1.681,0,0,1,0,2.384l-9.562,9.562a1.672,1.672,0,0,1-2.377,0Z"
                transform="translate(8.894 72.149)"
                fill="#a3a3a3"
              />
              <path
                id="Icon_awesome-angle-up"
                data-name="Icon awesome-angle-up"
                d="M12.445,11.229l9.563,9.563a1.681,1.681,0,0,1,0,2.384l-1.589,1.589a1.681,1.681,0,0,1-2.384,0L11.25,17.993,4.472,24.771a1.681,1.681,0,0,1-2.384,0l-1.6-1.589a1.681,1.681,0,0,1,0-2.384l9.563-9.562a1.683,1.683,0,0,1,2.391-.007Z"
                transform="translate(8.88 -10.734)"
                fill="#a3a3a3"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div
        ref={(el) => {
          line = el;
        }}
        className="line"
        id="line"
      >
          
      </div>
    </Wrapper>
  );
}
