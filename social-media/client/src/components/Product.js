import React, {useState} from 'react'
import Productform from "./Productform"
import {
//   MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon
} from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
  .button {
    /* height: 48px; */
    /* width: 48px */
    border-radius: 50%;
    height: 50%;
  }
  .icons {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
  .control_btns {
    background: transparent;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .yellow_color {
    color: #facf5a;
  }
  .yellow_btn {
    border: 1px solid #facf5a;
  }
  .yellow_btn:focus{
      outline: none
  }

  .red_color {
    color: #ff5959;
  }

  .red_btn {
    border: 1px solid #ff5959;
  }
  .red_btn:focus{
      outline: none
  }
`;

export default function Product(props) {
  const {productName, productDetails, productPrice, avatar, _id} = props
  const [editToggle, setEditToggle] = useState(false)
    return (
      <Wrapper>
        {!editToggle ? (
          <>
            <div className="container mx-auto">
              <MDBCol className="">
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                    className="img-fluid p-2"
                    style={{height: "300px", width: "100%"}}
                    src={avatar}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{productName}</MDBCardTitle>
                    <MDBCardText>
                      {productDetails}
                    </MDBCardText>
                    <MDBCardText>
                      {productPrice}
                    </MDBCardText>
                    <div className="icons">
                      <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className="control_btns yellow_btn" type="submit">
                        <MDBIcon className="yellow_color" icon="edit" />
                      </button>
                      <button className="control_btns red_btn" onClick={() => props.deleteProduct(_id)}>
                        <MDBIcon
                          className="red_color"
                          href="#"
                          icon="trash-alt"
                        />
                      </button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          </>
        ) : (
          <>
          <Productform
            productName={productName}
            productDetails={productDetails}
            productPrice={productPrice}
            avatar={avatar}
           />
           <a href="/" onClick={() => setEditToggle((prevToggle) => !prevToggle)}>Save</a>
          </>
        )}
      </Wrapper>
    );
}
