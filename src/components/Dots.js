/* eslint-disable react/no-array-index-key */
import PropType from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
  dots: {
    position: 'absolute',
    bottom: -25,
    width: '80%',
    display: 'flex',
    justifyContent: 'center'
  },
  dot: {
    width: 7,
    height: 7,
    background: ({ color }) => color,
    borderRadius: 80,
    display: 'block',
    margin: [ 0, 8 ]
  }
}))

const Dots = ({ color, numbers }) => {
  const classes = useStyles({ color })
  const iterations = new Array(numbers).fill(0)

  return (
    <div className={classes.dots}>
      {iterations.map((itr, index) => (
        <span className={classes.dot} key={index} />
      ))}
    </div>
  )
}

Dots.propTypes = {
  color: PropType.string,
  numbers: PropType.number
}

Dots.defaultProps = {
  color: '#70e670',
  numbers: 3
}

export default Dots
