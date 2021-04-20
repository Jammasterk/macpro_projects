import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import UserProvider from "./context/UserProvider"
import {BrowserRouter as Router} from "react-router-dom"
import "./index.css"

ReactDOM.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>,
  document.getElementById("root")
);