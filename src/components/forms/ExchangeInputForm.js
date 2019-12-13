/* eslint-disable no-useless-escape */
import React, { useRef, Fragment } from 'react'
import { createUseStyles } from 'react-jss'
import { Form, FormSpy, Field } from 'react-final-form'
import { OnChange } from 'react-final-form-listeners'

import ExchangeInput from '../input/ExchageInput'
import useProgressBar from '../progressbar/useProgressBar'
import Progress from '../progressbar/Progress'

const useStyles = createUseStyles(() => ({
  form: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: 900,
    padding: 15,
    margin: 'auto',
    marginBottom: 200
  },
  formText: {
    color: '#fff',
    margin: 0
  }
}))

const useButtonStyles = createUseStyles(() => ({
  submitButton: ({ disabled }) => ({
    padding: [ 10, 55 ],
    fontFamily: 'Lato',
    fontSize: 15,
    borderRadius: 50,
    background: disabled ? 'grey' : '#9238f7',
    color: 'white',
    outline: 'none',
    fontWeight: 'bold',
    border: 'none',
    width: 250,
    marginTop: 50
  })
}))

const validate = (formValues) => {
  const errors = {}

  if (!(formValues.gifts && formValues.gifts.trim())) {
    errors.gifts = 'Please tell your Santa what gifts you want'
  }

  if (!(formValues.favourites && formValues.favourites.trim())) {
    errors.favourites = 'Please fill up the favourites field'
  }

  if (!(formValues.pincode && formValues.pincode.trim())) {
    errors.pincode = 'Can\'t do without this, buddy :('
  }

  if (!(formValues.address && formValues.address.trim())) {
    errors.address = 'Santa doesn\'t know where you live. Yet '
  }

  return errors
}

// TODO: Consolidate Button Styles & remove this abomination
const ExchangeButton = ({ disabled }) => {
  const classes = useButtonStyles({ disabled })

  return (
    <button
      label="LOG IN"
      disabled={disabled}
      type="submit"
      className={classes.submitButton}
    >
      Submit
    </button>
  )
}

const ExchangeInputForm = ({ onFormSubmit }) => {
  const classes = useStyles()
  const valuesRef = useRef()
  const isLoading = useProgressBar(1500)

  const changePincode = async (pincode, form) => {
    if (pincode && pincode.length === 6) {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        const postOffices = await response.json()

        valuesRef.current = postOffices[0].PostOffice[0].State
      } catch (err) {
        valuesRef.current = 'Enter a valid pincode'
      }
      form.change("state", valuesRef.current)
    }
  }

  return (
    <Fragment>
      <Progress isAnimating={isLoading} />
      <Form
        validate={validate}
        onSubmit={onFormSubmit}
        initialValues={{
          state: ''
        }}
        render={({ form, handleSubmit, hasValidationErrors, submitting }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormSpy
              subscription={{ values: true }}
              onChange={async ({ values: { pincode } }) => {
                if (pincode && pincode.length === 6) {
                  try {
                    const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
                    const postOffices = await response.json()

                    valuesRef.current = postOffices[0].PostOffice[0].State
                  } catch (err) {
                    valuesRef.current = 'Enter a valid pincode'
                  }
                }
              }}
            />
            <Field
              component={ExchangeInput}
              name="gifts"
              placeholder="Books, Comics..."
              pretext="What do you want from your Santa? *"
            />
            <Field
              component={ExchangeInput}
              name="favourites"
              placeholder="Agatha Christie, The Dark Knight Returns.."
              pretext="What are your favourites of everything? *"
            />
            <Field
              component={ExchangeInput}
              name="notes"
              placeholder="Naah, I have no demands :)"
              pretext="Any notes to help your Santa?"
            />
            <Field
              component={ExchangeInput}
              name="pincode"
              placeholder=""
              pretext="What's your pincode? *"
            />
            <OnChange name="pincode">
              {(pincode) => changePincode(pincode, form)}
            </OnChange>
            <Field
              component={ExchangeInput}
              name="state"
              pretext="You're from"
              disabled
            />
            <Field
              component={ExchangeInput}
              name="country"
              placeholder="India"
              pretext="In the country of.."
              disabled
            />
            <Field
              component={ExchangeInput}
              name="address"
              placeholder=""
              pretext="Enter your full address *"
            />
            <Field
              component={ExchangeInput}
              name="phone"
              placeholder="2441139"
              pretext="And your phone number (This will help your Santa to send the gift)"
            />
            <ExchangeButton disabled={hasValidationErrors || submitting} />
          </form>
        )}
      />
    </Fragment>
  )
}

export default ExchangeInputForm
