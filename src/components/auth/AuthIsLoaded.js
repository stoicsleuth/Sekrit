import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
  loaderWrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '& img': {
      width: 50
    }
  }
}))

function AuthIsLoaded({ children }) {
  const classes = useStyles()
  const auth = useSelector((state) => state.firebase.auth)

  if (!isLoaded(auth)) {
    return (
      <div className={classes.loaderWrapper}>
        <img src="/static/icons/hat.svg" alt="hat" />
        <span>Loading...</span>
      </div>
    )
  }
  return children
}

export default AuthIsLoaded
