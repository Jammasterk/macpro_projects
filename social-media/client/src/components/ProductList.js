import React, {useContext} from "react"
import Product from "./Product"
import Productform from "./Productform"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
`

export default function ProductList(props){
    const {addProduct} = props
    const {products, deleteProduct, updateProduct} = useContext(UserContext)
    return(
        <Wrapper>
            <Productform submit={addProduct} btnText="Add Product" />
            <div>
                {products.map((product) => (
                    <Product
                        {...product}
                        key={product.productName}
                        deleteProduct={deleteProduct}
                        updateProduct={updateProduct}
                     />
                ))}
            </div>
        </Wrapper>
    )
}