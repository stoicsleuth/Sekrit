import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { toast } from 'react-toastify'

import { signInAction } from '../../store/actions/authActions'
import pattern from '../../constants/heroPattern'
import LoginBlob from '../blobs/LoginBlob'
import LoginForm from '../forms/LoginForm'
import Progress from '../progressbar/Progress'
import useProgressBar from '../progressbar/useProgressBar'
import { useRef } from 'react'

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

const LoginPage = () => {
  const classes = useStyles()
  const history = useHistory()

  const dispatch = useDispatch()
  const signIn = useCallback(
    (credentials) => dispatch(signInAction(credentials)),
    [ dispatch ]
  )

  const profile = useSelector((state) => state.firebase.profile)

  if (!profile.isEmpty) {
    history.push('/dashboard')
  }

  const isLoading = useProgressBar()

  const authError = useSelector((state) => state.auth.authError)

  useEffect(() => {
    toast.error(authError)
  }, [ authError ])

  const handleSubmit = (credentials) => {
    signIn(credentials)
    // To handle cases where authError value doesn't change but login stil fails
    if (authError) {
      toast.error(authError)
    }
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
