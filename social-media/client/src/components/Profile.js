import React, {useContext} from 'react'
import ProductList from "./ProductList"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
`

const Profile = () => {
    const {addProduct, updateProduct, deleteProduct} = useContext(UserContext)
    return (
      <Wrapper>
        <div>
            <h1>Upload new product</h1>
        </div>
        <ProductList
        addProduct={addProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
         />
      </Wrapper>
    );
}

export default Profile
