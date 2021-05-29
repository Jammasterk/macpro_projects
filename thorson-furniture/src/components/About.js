import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
.container{
    width: 80%;
    margin: 0 auto;
    height: 425spx;
    padding: 2em;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    margin-bottom: 2em;
}
    .title{
        font-size: 28px;
        width: 80%;
        margin: 1em auto
    }
    div{
    
        margin: 0 auto
    }
    img{
        width 30%;
    }
    .flex{
        display: flex;
        justify-content: space-around
    }
    p{
        padding: 0 1em;
        font-size: 24px;
        font-family 
    }
`;

export default function About() {
  return (
    <Wrapper>
      <h1 className="title">A little bit about me</h1>
      <div className="container">
        <div className="flex">
          <img
            src="https://pm1.narvii.com/6838/f251d6142e07ed1f8f58fc199dc5050ce97fd990v2_hq.jpg"
            alt=""
          />
          <p>
            Hi, I'm Joe Thorson. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Exercitationem quia eius illo numquam dolorem eos
            similique labore, consequuntur quas, voluptate porro amet ducimus
            doloribus voluptatum?
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
