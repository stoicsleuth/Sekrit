import React from 'react'
import { useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props }) => {
  const profile = useSelector((state) => state.firebase.profile)
  const history = useHistory()

  if (profile.isLoaded && profile.isEmpty) {
    history.push({
      pathname: '/',
      state: {
        toastMessage: 'You have to login!',
        type: 'error'
      }
    })
  }

  return (
    <Route {...props}>
      <Component />
    </Route>
  )
}

export default ProtectedRoute
