import React from 'react'
import { createUseStyles } from 'react-jss'
import SantaWave from '../../blobs/SantaWave'

const useStyles = createUseStyles(() => ({
  santaWrapper: {
    minHeight: '100vh',
    background: '#2d3159'
  },
  santaHeader: {
    backgroundImage: 'url("/static/icons/snow1.png"),url("/static/icons/snow2.png"),url("static/icons/snow3.png")',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 550,
    background: '#1e1f31',
    position: 'relative',
    textTransform: 'uppercase',
    color: '#fff',
    animation: '$snow 10s linear infinite',

    '& span': {
      fontSize: '6vmax',
      fontFamily: 'Montserrat',
      border: '12px solid #fff',
      padding: 10
    },

    '& div': {
      position: 'absolute',
      width: '100%',
      bottom: -75
    }
  },
  santaSteps: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,

    '& span:first-child': {
      color: '#d8d8d8',
      fontFamily: 'Montserrat',
      fontSize: 30
    }
  },
  santaStepsDesc: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 80,

    '& div': {
      display: 'flex',
      width: 330,
      height: 184,
      background: '#1f2142',
      borderRadius: 18,
      boxShadow: '0 0.5rem 0.75rem -0.25rem rgba(12, 12, 12, 0.5)',
      position: 'relative',
      margin: 20,
      padding: 30
    }
  },
  santaStepImages: {
    width: 130
  },
  santaStepNum: {
    position: 'absolute',
    fontSize: 130,
    top: -60,
    right: 10,
    color: '#2a2c4e'
  },
  santaStepText: {
    fontSize: 20,
    color: '#cacaca',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 15,
    zIndex: 1
  },
  '@keyframes snow': {
    '0%': 'background-position:0 0,0 0,0 0',
    '50%': 'background-position:500px 500px,100px 200px,-100px 150px',
    '100%': 'background-position:500px 1000px,200px 400px,-100px 300px'
  }
}))

const SantaIndexPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.santaWrapper}>
      <div className={classes.santaHeader}>
        <span>Secret Santa 2019</span>
        <SantaWave />
      </div>
      <div className={classes.santaSteps}>
        <span>Here are the 3 steps for you</span>
        <div className={classes.santaStepsDesc}>
          <div className={classes.santaStepOne}>
            <h2 className={classes.santaStepNum}>1</h2>
            <img className={classes.santaStepImages} src="/static/icons/fillform.svg" alt="xmas" />
            <span className={classes.santaStepText}>Fill up your details for matching</span>
          </div>
          <div className={classes.santaStepTwo}>
            <h2 className={classes.santaStepNum}>2</h2>
            <img className={classes.santaStepImages} src="/static/icons/xmas.svg" alt="xmas" />
            <span className={classes.santaStepText}>Retrive your match and sne your gift</span>
          </div>
          <div className={classes.santaStepThree}>
            <h2 className={classes.santaStepNum}>3</h2>
            <img className={classes.santaStepImages} src="/static/icons/celebration.svg" alt="xmas" />
            <span className={classes.santaStepText}>Sit back and wait for your Santa to surprise you</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SantaIndexPage
