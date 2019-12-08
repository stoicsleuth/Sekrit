const signInAction = (credentials) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  console.log(firebase)
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

export default signInAction
