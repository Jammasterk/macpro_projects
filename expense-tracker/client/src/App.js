import React, {useContext} from 'react'
import Profile from "./components/Profile"
import Auth from "./components/Auth"
import {Route, Redirect, Switch} from "react-router-dom"
import {UserContext} from "./context/UserProvider"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"


const App = () => {
    const {token, logout} = useContext(UserContext)
    return (
        <div>
            <Navbar logout={logout} token={token} />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
                 />
                 <ProtectedRoute
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                    token={token}
                  />
            </Switch>
        </div>
    )
}

export default App
