import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
  statusTag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [ 4, 34 ],
    borderRadius: 50,
    boxShadow: '0 0 20px rgba(23, 23, 23, 0.3)',
    background: ({ status }) => (status === 'active' ? '#67a956' : '#3B4D50'),
    cursor: ({ status }) => (status === 'active' ? 'pointer' : 'default')
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  '@media (max-width: 800px)': {
    statusTag: {
      fontSize: 12,
      padding: [ 1, 17 ]
    }
  }
}))

const ExchangeStatus = ({ status }) => {
  const classes = useStyles({ status })
  const icon = status === 'active' ? 'success' : 'time'

  return (
    <div className={classes.statusTag}>
      <img className={classes.statusIcon} src={`/static/icons/${icon}.svg`} alt="status icon" />
      {status === 'active' && (
        <p>
          Ongoing
        </p>
      )}
      {status === 'TBA' && (
        <p>
          Coming Soon!
        </p>
      )}
    </div>
  )
}

ExchangeStatus.propTypes = {
  status: PropTypes.string.isRequired
}

export default ExchangeStatus
