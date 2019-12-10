/* eslint-disable no-new */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { signInAction } from '../../store/actions/authActions'
import pattern from '../../constants/heroPattern'
import LoginBlob from '../blobs/LoginBlob'
import LoginForm from '../forms/LoginForm'
import Progress from '../progressbar/Progress'

const useStyles = createUseStyles(() => ({
  loginPage: {
    backgroundColor: '#2d3159',
    backgroundImage: `url("${pattern}")`,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
}))

const callFakeAPI = (delay) => (
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
)

const LoginPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const signIn = useCallback(
    (credentials) => dispatch(signInAction(credentials)),
    [ dispatch ]
  )
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    (async () => {
      await callFakeAPI(3000)
      setIsLoading(false)
    })()
  }, [])


  const handleSubmit = (credentials) => {
    signIn(credentials)
  }

  return (
    <div className={classes.loginPage}>
      <Progress isAnimating={isLoading} />
      <LoginBlob />
      <LoginForm onFormSubmit={handleSubmit} />
    </div>
  )
}

export default LoginPage
