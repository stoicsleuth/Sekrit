const addProfileDetailsAction = (firestore, profileId, profile) => {
  profile.country = 'India'
  profile.exchange = 'SS19'
  profile.id = profileId

  return (dispatch) => {
    firestore
      .collection('profiles')
      .add(profile)
      .then(() => {
        dispatch({ type: 'ADD_PROFILE', profile })
      })
      .catch((() => {
        dispatch({ type: 'ADD_PROFILE_ERROR', profile })
      }))
  }
}

export default addProfileDetailsAction
