import productData from "../productsData.js";
import styled from "styled-components";
import Nav from "./Nav"
import React, { useEffect } from "react";
// import productsData from "../productsData.js"
require("dotenv").config();

export default function Shopping() {
  const Wrapper = styled.div`
  
    .containerTwo {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      // display: flex
      width: 70%;
      margin: 0 auto;
      position: absolute;
      right: 0;
      z-index: -2;
      background: #5c5757
    }
    .item {
      width: 300px;
      // border: 1px solid black;
      margin: 1em;
      padding: 1em;
      height: 550px;
      background: #5c5757;
border-radius: 5px;
box-shadow: 9.91px 9.91px 15px #544F4F, -9.91px -9.91px 15px #645F5F;
    }

    button {
        width: 100%;
        height: 45px;
        border: 2px solid #efecec;
        background: none;
    }
    .para,
    small,
    button {
      font-family: "Montserrat", sans-serif;
      padding: 0.25em 0;
      color: #efecec
    }
    .para{
        padding: .5em 0;
        height: 595px
    }
    img {
        padding: 0.25em 0;
        height: 320px;
    }
    .product__name{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        padding: .5em 0;
        height: 45px;
        color: #efecec 
    }
    .description{
        height: 40px;
        margin-top: 1em
    }
  `;

  const data = productData.map((pro) => {
    return (
        <>
        
      <div style={{background: "#5c5757"}}>
        <div className="item" key={pro.men.productId}>
          <p className="product__name">{pro.men.productName}</p>
          <div className="description">
          <small className="para">{pro.men.productNameDescription}</small>
          </div>
          <br />
          <small>
            Price: ${pro.men.productPrice}
          </small>
          <img style={{ width: "100%" }} src={pro.men.imgUrl} alt="" />
          <small>{pro.men.productId}</small>
          <button>ADD TO CART</button>
        </div>
      </div>
      </>
    );
  });

  return (
      <>
        <Nav />
    <Wrapper>
      <div className="containerTwo">
        {/* <h1>SHOPPING</h1>
            <input id="item-search-one" type="text"  /> */}
        {data}
      </div>
    </Wrapper>
    </>
  );
}
