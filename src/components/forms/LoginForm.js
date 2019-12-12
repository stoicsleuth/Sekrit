/* eslint-disable no-useless-escape */
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Form, Field } from 'react-final-form'
import TextInput from '../input/TextInput'

const useStyles = createUseStyles(() => ({
  form: {
    alignItems: 'center',
    background: '#2d3159',
    borderRadius: 10,
    boxShadow: '0 2px 10px 0 rgba(0,0,0,.4)',
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    justifyContent: 'space-around',
    width: 400,
    zIndex: 1,
    padding: 15
  },
  loginButton: {
    padding: [ 10, 55 ],
    fontFamily: 'Lato',
    fontSize: 15,
    borderRadius: 50,
    background: '#6e30b3',
    color: 'white',
    outline: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  formText: {
    color: '#fff',
    margin: 0
  }
}))

const validate = (formValues) => {
  const errors = {}

  if (!(formValues.email && formValues.email.trim())) {
    errors.email = 'Please enter your email'
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!(formValues.password && formValues.password.trim())) {
    errors.password = 'Please enter your password'
  }

  return errors
}

const LoginForm = ({ onFormSubmit }) => {
  const classes = useStyles()

  return (
    <Form
      validate={validate}
      onSubmit={onFormSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <h2 className={classes.formText}>
            Log In to your account
            <span role="img" aria-label="Login"> 🎉</span>
          </h2>
          <Field
            component={TextInput}
            name="email"
            placeholder="Enter your email"
            icon="user"
          />
          <Field
            component={TextInput}
            icon="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button
            label="LOG IN"
            disabled={submitting}
            type="submit"
            className={classes.loginButton}
          >
            Log In
          </button>
        </form>
      )}
    />
  )
}

export default LoginForm
