/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import signInAction from '../../store/actions/authActions'

const LoginPage = () => {
  const dispatch = useDispatch()
  const signIn = useCallback(
    (credentials) => dispatch(signInAction(credentials)),
    [ dispatch ]
  )

  const [ credentials, setCredentials ] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (credentials.email.trim() === '' || credentials.password.trim() === '') return
    signIn(credentials)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Email: </label>
        <input
          type="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <br />
        <label>Enter Password: </label>
        <input
          type="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginPage
