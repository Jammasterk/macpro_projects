import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
ul{
    position: absolute;
    z-index: 3
}
li{
    margin-left: 48px;
    list-style:none;
    width: 32px
}
svg{
    width: 48px;
    color: #fff
}
`


export default function Navbar(props){
    const {logout, token} = props
    return (
      <Wrapper>
        <ul>
          {token && (
            <li onClick={logout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-door-closed"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
              </svg>
            </li>
          )}
        </ul>
      </Wrapper>
    );
}