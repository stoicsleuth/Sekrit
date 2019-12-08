import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import authReducer from './authReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default rootReducer
