import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
  backgroundText: {
    fontSize: '30vmax',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans serif'
  }
}))

const LoginText = ({ value }) => {
  const classes = useStyles()

  return (
    <p className={classes.backgroundText}>
      {value}
    </p>
  )
}

LoginText.propTypes = {
  value: PropTypes.string.isRequired
}

export default LoginText
