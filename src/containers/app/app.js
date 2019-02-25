import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'containers/home/Home'
import Press from 'containers/press/Press'
import ShareTheMessage from 'containers/shareTheMessage/shareTheMessage'
import Screenings from 'containers/screenings/screenings'

import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/press" exact component={Press} />
          <Route path="/share" exact component={ShareTheMessage} />
          <Route path="/screenings" exact component={Screenings} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
