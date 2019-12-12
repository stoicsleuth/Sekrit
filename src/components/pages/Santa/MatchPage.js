import React from 'react'
import Countdown from 'react-countdown-now'
import { createUseStyles } from 'react-jss'
import Progress from '../../progressbar/Progress'
import useProgressBar from '../../progressbar/useProgressBar'

const useStyles = createUseStyles(() => ({
  countdownWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginBottom: 100,
    flexWrap: 'wrap'
  },
  countdownDesc: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      width: 90
    },

    '& span': {
      fontSize: 22,
      color: 'white'
    }
  }
}))

const ountdownRenderer = ({ days, hours, minutes }) => {
  const countdownStyles = {
    color: 'white',
    fontSize: 80,
    fontFamily: 'Montserrat, sans-serif'
  }

  const styles = {
    fontSize: 15,
    color: '#c0c2d0'
  }

  return (
    <span style={countdownStyles}>
      {days}
      {days > 1 ? <span style={styles}>days</span> : <span style={styles}>day</span>}
      {hours}
      {hours > 1 ? <span style={styles}>hrs</span> : <span style={styles}>hr</span>}
      {minutes}
      {minutes > 1 ? <span style={styles}>mts</span> : <span style={styles}>mt</span>}
    </span>
  )
}

const MatchPage = () => {
  const classes = useStyles()
  const isLoading = useProgressBar(1000)

  return (
    <div className={classes.countdownWrapper}>
      <Progress isAnimating={isLoading} />
      <Countdown
        date={Date.parse('12/21/19')}
        renderer={ountdownRenderer}
      />
      <div className={classes.countdownDesc}>
        <img src="/static/icons/elf.svg" alt="elf" />
        <span>
          Our elves are hard at work to
          retrive the best match for you. You&apos;ll be notified when it&apos;s ready!
        </span>
      </div>
    </div>
  )
}

export default MatchPage
