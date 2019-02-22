import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'containers/home/Home'
import Press from 'containers/press/Press'

import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/press" exact component={Press} />
          <Route component={<Home />} />
        </Switch>
      </Router>
    )
  }
}

export default App
