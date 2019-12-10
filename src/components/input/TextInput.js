import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = createUseStyles(() => {
  const inputBackgroundColor = ({ input, meta }) => {
    if (meta) {
      if (meta.error && !meta.pristine) {
        return '#bd3f45'
      }

      if (!input.value.trim()) {
        return '#7b7b7b'
      }

      return '#84bd61'
    }

    return '#7b7b7b'
  }

  return {
    inputIcon: {
      height: 25,
      left: 15,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 25
    },
    inputWrapper: {
      borderRadius: 50,
      position: 'relative'
    },
    input: {
      background: (props) => inputBackgroundColor(props),
      border: '1px solid transparent',
      borderRadius: 50,
      boxShadow: '0 2px 10px 0 rgba(0,0,0,.2)',
      color: '#fff',
      fontFamily: 'Lato, sans-serif',
      fontSize: 15,
      outline: 'none',
      padding: [ 15, 55 ],
      transition: 'all 0.5s ease-in-out',

      '&::placeholder': {
        color: '#fff'
      }
    }
  }
})

const TextInput = ({ input, meta, icon, type, ...props }) => {
  const classes = useStyles({ meta, input })

  return (
    <div className={classes.inputWrapper}>
      <img className={classes.inputIcon} src={`./static/icons/${icon}.svg`} alt="Input Icons" />
      <input
        type={type}
        className={classes.input}
        {...props}
        {...input}
      />
    </div>
  )
}

TextInput.propTypes = {
  type: PropTypes.string
}

TextInput.defaultProps = {
  type: 'text'
}
export default TextInput
