import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import ProductIndex from "pages/ProductIndex"
import CartShow from "pages/CartShow"

import Header from "components/Header"
import Notifications from "components/Notifications"

import "normalize.css"
import "./globals.scss"
import "icons"

const App = () => (
  <Router>
    <Header />

    <Route path="/cart" component={CartShow} />
    <Route exact path="/" component={ProductIndex} />
    <Notifications />
  </Router>
)

export default App
