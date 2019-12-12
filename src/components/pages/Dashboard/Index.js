import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

import Status from '../../Status'

const useStyles = createUseStyles({
  dashboardPage: {
    background: '#2d3159',
    display: 'flex',
    height: '100%',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  welcomeCard: {
    marginTop: 100,
    marginBottom: 40,
    background: '#202442',
    backgroundImage: 'url("/static/icons/welcome.svg")',
    color: '#fff',
    width: '40vw',
    height: 200,
    display: 'flex',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    backgroundSize: 'cover',

    '& p': {
      fontSize: 40,
      fontWeight: 'bold'
    }
  },
  exchanges: {
    borderTop: '1px solid white',

    '& h4': {
      color: '#979ac3',
      fontSize: 20,
      marginLeft: 40
    }
  },
  exchangeCard: {
    height: 130,
    width: '70vw',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    background: '#2e325a',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    margin: 30,
    borderRadius: 30,
    color: '#fff',

    '&:nth-child(2n+1)': {
      background: '#ed4e61'
    },

    '&:nth-child(3n+1)': {
      background: '#7249f6'
    }
  },
  exchangeCardInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& img': {
      width: 60,
      height: 60,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      margin: 24
    }
  },
  exchangeCardType: {
    display: 'flex',
    flexDirection: 'column',

    '& h3': {
      margin: 0
    }
  },
  statusWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },
  typeTag: {
    background: '#bb6813',
    color: '#fff',
    padding: 2,
    marginTop: 5,
    maxWidth: 60,
    textAlign: 'center'
  },
  '@media (max-width: 800px)': {
    exchanges: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    exchangeCard: {
      width: '90vw'
    },
    exchangeCardInfo: {
      '& img': {
        marginRight: 10,
        marginLeft: 0
      }
    },
    welcomeCard: {
      width: '90vw',
      height: 235
    }
  }
})

const DashboardPage = () => {
  const classes = useStyles()
  useFirestoreConnect('exchanges')

  const profile = useSelector((state) => state.firebase.profile)
  const exchanges = useSelector((state) => state.firestore.ordered.exchanges)

  return (
    <div className={classes.dashboardPage}>
      <div className={classes.welcomeCard}>
        <p>
          Welcome,
          {' '}
          {profile.name}
        </p>
      </div>
      <div className={classes.exchanges}>
        <h4>Choose From the ongoing Gift-Exchanges!</h4>
        {exchanges && exchanges.map((exchange) => (
          <div key={exchanges.name} className={classes.exchangeCard}>
            <div className={classes.exchangeCardInfo}>
              <img src={`/static/icons/${exchange.img}.png`} alt="exchange" />
              <div className={classes.exchangeCardType}>
                <h3>{exchange.name}</h3>
                <span className={classes.typeTag}>{exchange.type.toUpperCase()}</span>
              </div>
            </div>
            <div className={classes.statusWrapper}>
              <Link to="/santa">
                <Status status={exchange.status} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
