import React from "react"
import ReactDOM from "react-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserProvider from "./context/UserProvider"

import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import App from "./App"
import "./reset.css"

ReactDOM.render(
<UserProvider>
    <App/>
</UserProvider>
,document.getElementById("root"))