import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import firebase from 'firebase/app'

import App from './App'
import rootReducer from './store/reducers/rootReducer'

import './index.css'
import fbConfig from './config/fbConfig'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
)

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root')
)

