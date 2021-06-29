import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap, { Power3 } from "gsap";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.png";

export default function App() {
  const Wrapper = styled.div`
    ul {
      position: absolute;
      margin-left: -15.5%;
      border-right: 1px solid #f5eded;
      padding: 1em;
      margin-top: 10%;
      padding-right: 50px;
      height: 70%;
      overflow: hidden;
    }
    li {
      font-size: 2em;
      padding: 1em;
    }
    li:hover {
      font-size: 2.5em;
      text-decoration: line-through;
      font-style: italic;
      font-weight: 100;
    }
    a {
      text-decoration: none;
      color: #f5eded;
      font-family: "Montserrat", sans-serif;
      font-weight: 200;
    }

    .contain {
      display: flex;
    }

    img {
      width: 32px;
      margin-top: 25%;
      opacity: 1;
      margin-left: 1.75em;
      filter: invert(1);
      opacity: 1
    }
  `;
  
  let navEvent = useRef(null);
  let hamburger = useRef(null);

  useEffect(() => {
      setTimeout(() => {
        gsap.to(navEvent, {
            opacity: .1
        })
        gsap.to(hamburger, {
            opacity: .1
        })
      }, 3000)
  })

  function navMenuEnter() {
    gsap.to(navEvent, {
      marginLeft: "0%",
      opacity: 1
    });
    gsap.to(hamburger, .25, {
      opacity: 0,
      ease: Power3.easeIn,
    });
  }

  function navMenuLeave() {
    setTimeout(() => {
        gsap.to(navEvent, 1, {
            marginLeft: "-15.5%",
            opacity: 1
          });
      gsap.to(navEvent, 1, {
        marginLeft: "-15.5%",
        opacity: .1
      });
      gsap.to(hamburger, 1, {
        opacity: .1,
        ease: Power3.easeOut,
      });
    }, 500);
   
  }

  return (
    <Wrapper>
      <div className="contain">
        <img
          ref={(el) => {
            hamburger = el;
          }}
          src={Menu}
          alt=""
        />
        <ul
          onMouseEnter={navMenuEnter}
          onMouseLeave={navMenuLeave}
          ref={(el) => {
            navEvent = el;
          }}
        >
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/shopping">SHOPPING</Link>
          </li>
          <li>
            <Link to="/account">ACCOUNT</Link>
          </li>
          <li>
            <Link to="/cart">PAY</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
