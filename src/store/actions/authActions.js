const signInAction = (credentials) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase.login({
    email: credentials.email,
    password: credentials.password
  }).then(() => {
    console.log('success')
    dispatch({ type: 'LOGIN_SUCCESS' })
  }).catch((err) => {
    console.log('Error')
    dispatch({ type: 'LOGIN_ERROR', err })
  })
}

const signOutAction = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  console.log(firebase)
  firebase.logout()
  dispatch({ type: 'LOGOUT_SUCCESS' })
}

const signupAction = ({ email, password, name }) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase.createUser(
    { email, password },
    { name, email }
  ).then(() => {
    dispatch({ type: 'SIGNUP_SUCCESS' })
  }).catch((err) => {
    console.log(err)
    dispatch({ type: 'SIGNUP_ERROR', err })
  })
}


export {
  signInAction,
  signOutAction,
  signupAction
}
