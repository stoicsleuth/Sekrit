const addProfileDetailsAction = (firestore, profileId, profile) => {
  profile.country = 'India'
  profile.exchange = 'SS19'
  profile.id = profileId

  return async (dispatch) => {
    const docRef = await firestore.collection('profiles').where('id', '==', profileId).get()
    let docId

    docRef.forEach((doc) => {
      docId = doc.id
    })

    if (docId) {
      firestore
        .collection('profiles')
        .doc(docId)
        .set(profile)
        .then(() => {
          dispatch({ type: 'EDIT_PROFILE', profile })
        })
        .catch((() => {
          dispatch({ type: 'EDIT_PROFILE_ERROR', profile })
        }))
    } else {
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
}

export default addProfileDetailsAction
