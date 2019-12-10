import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => {
  const animationProps = {
    animationDuration: '5s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite'
  }

  return {
    loginBlob: {
      position: 'absolute',
      top: 0,
      left: 0
    },
    circle: {
      ...animationProps
    },
    blob_one: {
      ...animationProps,
      animationName: '$one'
    },
    blob_two: {
      ...animationProps,
      animationName: '$two'
    },
    blob_three: {
      ...animationProps,
      animationName: '$three'
    },
    blob_four: {
      ...animationProps,
      animationName: '$four'
    },
    blob_five: {
      ...animationProps,
      animationName: '$five'
    },
    blob_six: {
      ...animationProps,
      animationName: '$six'
    },

    '@keyframes one': {
      '0%': 'transform:translate(0,0)',
      '50%': 'transform:translate(10px,10px)'
    },
    '@keyframes two': {
      '0%': 'transform:translate(0,0)',
      '50%': 'transform:translate(-15px,5px)'
    },
    '@keyframes three': {
      '0%': 'transform:translate(0,0)',
      '50%': 'transform:translate(17px,7px)'
    },
    '@keyframes four': {
      '0%': 'transform:translate(0,0)',
      '50%': 'transform:translate(5px,-20px)'
    },
    '@keyframes five': {
      '0%': 'transform:translate(0,0)',
      '50%': 'transform:translate(0px,5px)'
    },
    '@keyframes six': {
      '0%': 'transform:translate(0,0)',
      '50%': 'transform:translate(20px,-5px)'
    }
  }
})

const LoginBlob = () => {
  const classes = useStyles()

  return (
    <div className={classes.loginBlob}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="700" height="700" fill="#1abc9c">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g filter="url('#goo')">
          <circle className={classes.circle} cx="0" cy="0" r="500" />
          <circle className={classes.blob_one} cy="110" cx="30" r="410" />
          <circle className={classes.blob_two} cy="90" cx="430" r="90" />
          <circle className={classes.blob_three} cy="170" cx="410" r="90" />
          <circle className={classes.blob_four} cy="300" cx="380" r="90" />
          <circle className={classes.blob_five} cy="380" cx="340" r="60" />
          <circle className={classes.blob_six} cy="440" cx="240" r="60" />
        </g>
      </svg>
    </div>
  )
}

export default LoginBlob
