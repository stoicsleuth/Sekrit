import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const useStyles = createUseStyles(() => ({
  inputWrapper: {
    borderRadius: 50,
    position: 'relative',
    width: '80%',
    marginBottom: 20
  },
  input: {
    border: 'none',
    borderBottom: '1px solid #fff',
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontSize: 25,
    outline: 'none',
    fontStyle: 'italic',
    transition: 'all 0.5s ease-in-out',
    background: 'transparent',
    height: 55,
    width: '100%',

    '&::placeholder': {
      color: '#d2d2d2'
    }
  },
  error: {
    color: '#f3d3a1',
    marginTop: 10
  },
  pretext: {
    display: 'flex',
    justifyContext: 'flex-start',
    width: '80%',

    '& h3': {
      color: '#d2d2d2'
    }
  }
}))

const ExchangeInput = ({ input, meta, icon, pretext, type, ...props }) => {
  const classes = useStyles({ meta, input })
  const error = meta && meta.touched && meta.error

  return (
    <Fragment>
      <div className={classes.pretext}>
        <h3>{pretext}</h3>
      </div>
      <div className={classes.inputWrapper}>
        <input
          type={type}
          className={classes.input}
          {...props}
          {...input}
        />
        {error && (
          <span className={classes.error}>{error}</span>
        )}
      </div>
    </Fragment>
  )
}

ExchangeInput.propTypes = {
  type: PropTypes.string
}

ExchangeInput.defaultProps = {
  type: 'text'
}
export default ExchangeInput
