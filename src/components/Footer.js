import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => {
  const pseudoStyles = {
    top: '43%',
    right: 54,
    width: 15,
    content: '""',
    position: 'absolute',
    height: 15,
    borderRadius: 20,
    background: '#2d3159'
  }

  return {
    footer: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: [ 20, 40 ],
      color: '#fff',
      background: '#191c31'
    },
    makeshiftLogo: {
      display: 'flex',
      flexDirection: 'column',

      '& h4': {
        marginTop: 5,
        color: '#fff'
      }
    },
    aboutText: {
      borderBottom: '2px solid red'
    },
    makeshiftLogoText: {
      padding: [ 5, 16 ],
      background: '#fff',
      fontSize: 34,
      color: 'black',
      fontFamily: 'Montserrat',
      position: 'relative',

      '&::before': {
        ...pseudoStyles
      },

      '&::after': {
        ...pseudoStyles,

        right: 30,
        background: '#bb4c4c'
      }
    }
  }
})


const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <span className={classes.aboutText}>About Us</span>
        <h3>F.A.Q</h3>
      </div>
      <div className={classes.makeshiftLogo}>
        <span className={classes.makeshiftLogoText}>D&S</span>
        <h4>Dynamite & Sloppiness</h4>
      </div>
    </footer>
  )
}

export default Footer
