import React from 'react'
// import {Link} from "react-router-dom"

export default function Navbar(props) {
    const {logout} = props
    return (
        <div>
            <li onClick={logout}>Logout</li>
        </div>
    )
}
