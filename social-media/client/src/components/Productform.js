import React, {useState} from 'react'
import FileUploadWithPreview from "file-upload-with-preview";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
    .product_btn{
        color: #fff
    }
    .product_btn:focus{
        outline: none
    }
`

export default function ProductForm(props) {

  const initInputs =
  {
    productName: "",
    productDetails: "",
    productPrice: '',
    discount: "",
    avatar: ""
  }

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  
  function handleSubmit(e){
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initInputs)
  }
  
  const {productName, productDetails, productPrice, avatar} = inputs
    return (
      <Wrapper>
        <div>
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ background: "#fafaf6" }}>
                  <h2 style={{ fontSize: "300%" }} className="h1 display-3">
                    PRODUCT PAGE
                  </h2>
                  <hr className="my-2" />
                  <form
                    action=""
                    className="w-75 mx-auto"
                    onSubmit={handleSubmit}
                  >
                    <MDBInput
                      type="text"
                      label="Product Name"
                      name="productName"
                      value={productName}
                      onChange={handleChange}
                    />
                    <MDBInput
                      type="text"
                      label="Product Details"
                      name="productDetails"
                      value={productDetails}
                      onChange={handleChange}
                    />
                    <MDBInput
                      type="text"
                      label="Price"
                      name="productPrice"
                      value={productPrice}
                      onChange={handleChange}
                    />
                    {/* <MDBInput type="file" name="avatar" value={avatar}/> */}
                    <label className="custom-file-container__custom-file">
                      <input
                        type="file"
                        className="custom-file-container__custom-file__custom-file-input"
                        accept="*"
                        multiple
                        aria-label="Choose File"
                      />
                      <input
                        type="hidden"
                        name="MAX_FILE_SIZE"
                        value="10485760"
                      />
                      <span className="custom-file-container__custom-file__custom-file-control"></span>
                    </label>
                    <div className="custom-file-container__image-preview"></div>
                    <MDBBtn
                      className="product_btn"
                      color="rgba(121, 85, 72, 0.7) rgba-brown-strong"
                      outline
                      type="submit"
                    >
                      Add Product
                    </MDBBtn>
                  </form>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </Wrapper>
    );
}
