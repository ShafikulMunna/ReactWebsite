import React from 'react'
//import Home from './pages/home/Home'
import { Topbar } from './component/topbar/Topbar'
//import Login from './pages/login/Login'
import Register from './pages/register/Register'
//import Setting from './pages/settings/Setting'
//import Write from './pages/write/Write'
//import Single from './pages/single/Single'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
    < Topbar />
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
    </Switch>
    </Router>
      
    </>
  )
}

export default App

