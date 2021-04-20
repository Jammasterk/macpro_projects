import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth.js";
import ProfileHome from "./components/ProfileHome.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { UserContext } from "./context/UserProvider.js";

export default function App() {
    const {token, logout} = useContext(UserContext)
    return (
      <div>
        {token && <Navbar logout={logout} />}
        <Switch>
            <Route
                exact
                path="/"
                render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
             />
                <ProtectedRoute
                    path="/profile"
                    component={ProfileHome}
                    redirectTo="/"
                    token={token}
                 />
        </Switch>
      </div>
    );
}
