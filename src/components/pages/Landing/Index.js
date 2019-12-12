import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const useStyles = createUseStyles(() => {
  const introStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#100a21',
    height: 600,
    padding: [ 10, 100 ],
    flexWrap: 'wrap'
  }

  return {
    header: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: 100
    },
    headerImage: {
      width: '40vmax'
    },
    headerText: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 30,
      color: '#fff',
      textAlign: 'center'
    },
    introSection: {
      ...introStyles
    },
    introSection2: {
      ...introStyles,

      background: '#26497d'
    },
    introCard: {
      background: 'white',
      padding: [ 30, 31 ],
      borderRadius: 30,
      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    },
    introText: {
      fontSize: 60,
      fontFamily: 'Montserrat, sans-serif',
      color: 'white'
    },
    signUpSection: {
      ...introStyles,

      height: 200
    },
    introImage: {
      width: 300
    },
    '@media (max-width: 800px)': {
      introImage: {
        width: 200
      },
      introText: {
        fontSize: 45
      }
    }
  }
})

const LandingPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const { state: { toastMessage } = {} } = useLocation()
  const profile = useSelector((state) => state.firebase.profile)

  useEffect(() => {
    history.replace()
  }, [ history ])

  if (!profile.isEmpty) {
    history.push('/dashboard')
  }

  if (toastMessage) {
    toast.error(toastMessage)
  }

  return (
    <div className={classes.landinPageWrapper}>
      <section className={classes.header}>
        <img className={classes.headerImage} src="/static/icons/people.svg" alt="people" />
        <h2 className={classes.headerText}>A brand new Gift-Exchaging platform.</h2>
      </section>
      <section className={classes.introSection}>
        <div className={classes.introCard}>
          <img className={classes.introImage} src="/static/icons/anon.svg" alt="intro" />
        </div>
        <h2 className={classes.introText}>Completely Anonymous</h2>
      </section>
      <section className={classes.introSection2}>
        <h2 className={classes.introText}>Incredibly easy and sleek</h2>
        <div className={classes.introCard}>
          <img className={classes.introImage} src="/static/icons/easy.svg" alt="intro" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage
