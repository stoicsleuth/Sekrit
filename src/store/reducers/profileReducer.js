const initState = {
  profileError: null
}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profileError: null
      }
    case 'ADD_PROFILE_ERROR':
      return {
        ...state,
        profileError: 'Couldn\'t submit the details'
      }
    default:
      return {
        ...state
      }
  }
}

export default profileReducer
