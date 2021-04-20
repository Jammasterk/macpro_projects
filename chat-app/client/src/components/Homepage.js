import React from 'react'
import styled from "styled-components"

    // --pale-violet: hsl(276, 100%, 81%);
    // --moderate-violet: hsl(276, 55%, 52%);
    // --desaturated-dark-violet:hsl(271, 15%, 43%);
    // --grayish-blue: hsl(206, 6%, 79%);
    // --very-dark-desaturated-violet: hsl(271, 36%, 24%);
    // --dark-grayish-violet:hsl(270, 7%, 64%);

    // /* Gradients */

    // --light-magenta: hsl(293, 100%, 63%);
    // --light-violet: hsl(264, 100%, 61%);

    // /* Secondary */

    // --white: hsl(0, 0%, 100%);
    // --light-grayish-violet: hsl(270, 20%, 96%);
    // --very-dark-desaturated-violet: hsl(271, 36%, 24%);
    // --very-light-magenta: hsl(289, 100%, 72%);

    // /* Typography */

    // --rubik: 'Rubik',sans-serif;
    // --regular: 400;
    // --medium: 500;
    // --bod: 700

const Wrapper = styled.div`
  .container {
    display: flex;
    width: 100vw;
  }
  .container__left {
    width: 30vw;
    position: absolute;
  }
  .container__right {
    width: 70vw;
    position: absolute;
    right: 0;
    text-align: center;
    padding: 0 15%;
    text-align: left;
    top: 30%;
  }
  h1 {
    font-family: var(--rubik);
    font-weight: var(--bold);
    color: var(--very-dark-desaturated-violet);
    font-size: 42px;
    margin-bottom: 1.5em;
  }
  p {
    color: var(--desaturated-dark-violet);
    font-size: 20px;
    line-height: 36px;
  }
  .box {
    background: var(--moderate-violet);
    width: 100%;
    min-height: 700px;
    border-radius: 0 0 10%;
  }

`;

export default function Homepage() {
    return (
      <>
        <Wrapper>
          <div className="container">
            <div className="container__left">
              <div className="inner__container">
                <div className="box"></div>
              </div>
            </div>
            <div className="container__right">
              <h1>Simple Booking</h1>
              <p>
                Stay in touch with our dog walkers through the chat interface.
                This makes it easy to discuss arrangements and make bookings.
                Once the walk has been completed you can rate your walker and
                book again through the chat
              </p>
            </div>
          </div>
        </Wrapper>
        <div class="cont">
          <div class="phone">
            <div class="upper__content"></div>
            <div class="body"></div>
          </div>
        </div>
      </>
    );
}
