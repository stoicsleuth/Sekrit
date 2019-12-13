import { toast } from 'react-toastify'

const initState = {
  profileError: null
}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      toast.success('Your details are saved!')
      return {
        ...state,
        profileError: null
      }
    case 'ADD_PROFILE_ERROR':
      toast.error('Dang, could not save your details. Try again!')
      return {
        ...state,
        profileError: 'Couldn\'t submit the details'
      }
    case 'EDIT_PROFILE':
      toast.success('Your details are updated!')
      return {
        ...state,
        profileError: null
      }
    case 'EDIT_PROFILE_ERROR':
      toast.error('Dang, could not update your details. Try again!')
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
