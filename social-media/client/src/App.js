import React, {useContext} from 'react'
import Auth from "./components/Auth"
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./context/UserProvider";
import Navbar from "./components/Navbar"
// import Profile from "./components/Profile"
// import Profileform from "./components/Profileform"

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
            component={Profile}
            redirectTo="/"
            token={token}
          />
        </Switch>
      </div>
    );
}
