/* eslint-disable no-new */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'

import { signupAction } from '../../store/actions/authActions'
import pattern from '../../constants/heroPattern'
import LoginBlob from '../blobs/LoginBlob'
import SignupForm from '../forms/SignupForm'
import Progress from '../progressbar/Progress'
import useProgressBar from '../progressbar/useProgressBar'

const useStyles = createUseStyles(() => ({
  signupPage: {
    backgroundColor: '#2d3159',
    backgroundImage: `url("${pattern}")`,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
}))

const SignupPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const signIn = useCallback(
    (credentials) => dispatch(signupAction(credentials)),
    [ dispatch ]
  )
  const isLoading = useProgressBar()

  const profile = useSelector((state) => state.firebase.profile)

  if (!profile.isEmpty) {
    history.push('/dashboard')
  }


  const handleSubmit = (credentials) => {
    signIn(credentials)
  }

  return (
    <div className={classes.signupPage}>
      <Progress isAnimating={isLoading} />
      <LoginBlob />
      <SignupForm onFormSubmit={handleSubmit} />
    </div>
  )
}

export default SignupPage
