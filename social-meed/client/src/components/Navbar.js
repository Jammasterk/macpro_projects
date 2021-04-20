import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(props) {
    const {logout, token} = props
    return (
        <div>
            <ul>
                <li>
                    {token && <Link to="/profile">
                        Profile
                    </Link>}
                </li>
                <li>
                    {token && <li onClick={logout}>Logout</li>}
                </li>
            </ul>
        </div>
    )
}
