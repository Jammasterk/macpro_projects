import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Account from "./components/Account"
import Cart from "./components/Cart"
import Shopping from "./components/Shopping"
import Nav from "./components/Nav"
import Signup from "./components/Signup"

export default function App() {
    return (
        <div>
            {/* <Shopping /> */}
           <Switch>
               <Route exact path="/nav" component={Nav} />
               <Route path="/home" component={Home}/>
               <Route path="/shopping" component={Shopping} />
               <Route path="/account" component={Account} />
               <Route path="/cart" component={Cart} />
            </Switch> 
        </div>
    )
}
