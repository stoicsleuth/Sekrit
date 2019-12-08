const profileReducer = (state = {}, action) => {
  switch(action.type){
    case 'CREATE_PROFILE':
    console.log('abc')
    return state
    default:
    console.log('bca')
    return state
  }
}

export default profileReducer