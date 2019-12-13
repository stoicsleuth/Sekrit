import React, { useCallback } from 'react'
import { createUseStyles } from 'react-jss'
// import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOutAction } from '../../../store/actions/authActions'

const useStyles = createUseStyles(() => {
  const buttonStyles = {
    padding: [ 15, 40 ],
    fontWeight: 'bold',
    fontSize: '1.2em',
    textDecoration: 'none',
    border: '2px solid white',
    paddingSm: [ 5, 10 ]
  }
  return {
    logo: {
      width: 150
    },
    navbar: {
      background: 'transparent',
      position: 'absolute',
      zIndex: 10,
      padding: [ 50, 80 ],
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },
    signInButton: {
      ...buttonStyles,

      background: 'transparent',
      color: '#fff',
      marginRight: 20
    },
    signUpButton: {
      ...buttonStyles,

      background: '#fff',
      color: 'black'
    },
    logoWrapper: {
      position: 'relative'
    },
    vTag: {
      position: 'absolute',
      fontSize: 12,
      color: 'white',
      top: 37,
      right: 12,
      fontFamily: 'Montserrat, sans-serif'
    },
    '@media (max-width: 800px)': {
      navbar: {
        padding: [ 17, 10 ],
        alignItems: 'center'
      },
      signUpButton: {
        padding: buttonStyles.paddingSm
      },
      signInButton: {
        padding: buttonStyles.paddingSm
      },
      logo: {
        width: 100
      },
      vTag: {
        top: 25,
        right: 8
      }
    }
  }
})

const Navbar = () => {
  // const state = useSelector(state => state.firebase)
  const classes = useStyles()
  const dispatch = useDispatch()
  const isLoggedOut = useSelector(
    (state) => state.firebase.auth.isEmpty
  )

  const signOut = useCallback(
    () => dispatch(signOutAction()),
    [ dispatch ]
  )

  return (
    <div className={classes.navbar}>
      <div className={classes.logoWrapper}>
        <Link to="/">
          <img className={classes.logo} src="/static/icons/logo.png" alt="Logo" />
          <span className={classes.vTag}>v0.1.0</span>
        </Link>
      </div>
      {isLoggedOut
        && (
          <div>
            <Link to="/login" type="button" className={classes.signInButton}>Log In</Link>
            <Link to="signup" type="button" className={classes.signUpButton}>Sign Up</Link>
          </div>
        )}
      {!isLoggedOut
        && (
          <div>
            <Link to="/" onClick={() => signOut()} type="button" className={classes.signUpButton}>Log Out</Link>
          </div>
        )}
    </div>
  )
}

export default Navbar
