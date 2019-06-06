import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, PageNotFound } from './screens'

import './App.scss'

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
        </Switch>
    </Router>
)

export default App
