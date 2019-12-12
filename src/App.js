
// import Navbar from './components/layout/nav/Navbar'
// import Todo from './components/Todo'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createFirestoreInstance } from 'redux-firestore'
import { createUseStyles } from 'react-jss'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import React from 'react'
import thunk from 'redux-thunk'
import { toast } from 'react-toastify'

import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'
import Navbar from './components/layout/nav/Navbar'
import rootReducer from './store/reducers/rootReducer'
import AuthIsLoaded from './components/auth/AuthIsLoaded'

import { firebaseConfig } from './config/fbConfig'
import DashboardPage from './components/pages/Dashboard/Index'
import SantaIndexPage from './components/pages/Santa/Index'
import LandingPage from './components/pages/Landing/Index'

import 'react-toastify/dist/ReactToastify.min.css'
import ProtectedRoute from './components/Routes/ProtectedRoute'
import Footer from './components/Footer'

toast.configure()

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
)

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

const useStyles = createUseStyles(() => ({
  app: {
    height: '100%',
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden',
    boxSizing: 'border-box',
    background: '#2d3159'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <AuthIsLoaded>
            <div className={classes.app}>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/signup">
                  <SignupPage />
                </Route>
                <ProtectedRoute path="/dashboard" component={DashboardPage} />
                <ProtectedRoute path="/santa" component={SantaIndexPage} />
              </Switch>
              <Footer />
            </div>
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App
