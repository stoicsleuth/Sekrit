import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Todo from './components/Todo'
// import Navbar from './components/layout/nav/Navbar'
import LoginPage from './components/auth/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/other">
            <div>
              Hi
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
