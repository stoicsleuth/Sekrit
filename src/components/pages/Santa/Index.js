import { createUseStyles } from 'react-jss'
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { Route, Link, useRouteMatch, useHistory } from 'react-router-dom'
import { useFirestore } from 'react-redux-firebase'
import { toast } from 'react-toastify'

import ExchangeInputForm from '../../forms/ExchangeInputForm'
import SantaWave from '../../blobs/SantaWave'
import addProfileDetailsAction from '../../../store/actions/profileActions'
import Progress from '../../progressbar/Progress'
import useProgressBar from '../../progressbar/useProgressBar'
import Dots from '../../Dots'
import MatchPage from './MatchPage'

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
    margin: 80
  },
  santaStep: {
    display: 'flex',
    width: 330,
    height: 184,
    background: '#1f2142',
    borderRadius: 18,
    boxShadow: '0 0.5rem 0.75rem -0.25rem rgba(12, 12, 12, 0.5)',
    position: 'relative',
    margin: 20,
    padding: 30
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
  '@media (min-width: 1600px)': {
    santaHeader: {
      height: 700
    }
  },
  '@media (max-width: 800px)': {
    santaHeader: {
      height: 500,

      '& span': {
        fontSize: 25,
        borderWidth: 5
      },

      '& div': {
        bottom: -8
      }
    },
    santaSteps: {
      '& span:first-child': {
        fontSize: 21
      }
    }
  },
  '@keyframes snow': {
    '0%': 'background-position:0 0,0 0,0 0',
    '50%': 'background-position:500px 500px,100px 200px,-100px 150px',
    '100%': 'background-position:500px 1000px,200px 400px,-100px 300px'
  }
}))

const SantaIndexPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const fireStore = useFirestore()
  const match = useRouteMatch()
  const isLoading = useProgressBar()
  const history = useHistory()

  const profileId = useSelector((state) => state.firebase.auth.uid)

  const addProfileDetails = useCallback(
    (credentials) => dispatch(addProfileDetailsAction(fireStore, profileId, credentials)),
    [ dispatch, fireStore, profileId ]
  )

  const handleSubmit = (credentials) => {
    addProfileDetails(credentials)
    history.push('/dashboard')
    toast.success('Your details are saved!')
  }

  return (
    <div className={classes.santaWrapper}>
      <Progress isAnimating={isLoading} />
      <div className={classes.santaHeader}>
        <span>Secret Santa 2019</span>
        <SantaWave />
      </div>
      <div className={classes.santaSteps}>
        <span>Here are the 3 steps for you</span>
        <div className={classes.santaStepsDesc}>
          <Link to="/santa/profile">
            <div className={classes.santaStep}>
              <h2 className={classes.santaStepNum}>1</h2>
              <img className={classes.santaStepImages} src="/static/icons/fillform.svg" alt="xmas" />
              <span className={classes.santaStepText}>Fill up your details for matching</span>
              <Dots />
            </div>
          </Link>
          <Link to="/santa/match">
            <div className={classes.santaStep}>
              <h2 className={classes.santaStepNum}>2</h2>
              <img className={classes.santaStepImages} src="/static/icons/xmas.svg" alt="xmas" />
              <span className={classes.santaStepText}>Retrive your match and send your gift</span>
              <Dots color="#ffff00" />
            </div>
          </Link>
          <div className={classes.santaStep}>
            <h2 className={classes.santaStepNum}>3</h2>
            <img className={classes.santaStepImages} src="/static/icons/celebration.svg" alt="xmas" />
            <span className={classes.santaStepText}>
              Sit back and wait for your Santa to surprise you
            </span>
            <Dots color="#ffff00" />
          </div>
        </div>
      </div>
      <Route
        path={`${match.path}/profile`}
        render={(props) => (
          <ExchangeInputForm onFormSubmit={handleSubmit} {...props} />
        )}
      />
      <Route
        path={`${match.path}/match`}
        render={() => (
          <MatchPage />
        )}
      />
    </div>
  )
}

export default SantaIndexPage
