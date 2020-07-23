import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './components/pages/MainPage'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Redirect path="*" to="/" />
    </Switch>
  )
}

export default App
